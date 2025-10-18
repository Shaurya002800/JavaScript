const boardSize = 9;
    let board = [];
    let original = [];
    let steps = 0;

    function createBoard() {
      const table = document.getElementById('sudoku');
      table.innerHTML = '';
      for (let i = 0; i < boardSize; i++) {
        const row = [];
        const tr = document.createElement('tr');
        for (let j = 0; j < boardSize; j++) {
          const td = document.createElement('td');
          const input = document.createElement('input');
          input.type = 'text';
          input.maxLength = 1;
          td.appendChild(input);
          tr.appendChild(td);
          row.push(input);
        }
        board.push(row);
        table.appendChild(tr);
      }
    }

    function resetBoard() {
      for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
          board[i][j].value = original[i][j] === 0 ? '' : original[i][j];
          board[i][j].disabled = original[i][j] !== 0;
        }
      }
      document.getElementById('steps').innerText = '0';
      document.getElementById('time').innerText = '0';
    }

    function getGrid() {
      const grid = [];
      for (let i = 0; i < boardSize; i++) {
        const row = [];
        for (let j = 0; j < boardSize; j++) {
          const val = board[i][j].value;
          row.push(val ? parseInt(val) : 0);
        }
        grid.push(row);
      }
      return grid;
    }

    function isSafe(grid, row, col, num) {
      for (let x = 0; x < boardSize; x++) {
        if (grid[row][x] === num || grid[x][col] === num ||
            grid[3 * Math.floor(row / 3) + Math.floor(x / 3)]
                 [3 * Math.floor(col / 3) + x % 3] === num) {
          return false;
        }
      }
      return true;
    }

    async function solveSudokuAnimated() {
      steps = 0;
      const grid = getGrid();
      const start = performance.now();
      await backtrack(grid);
      const end = performance.now();
      document.getElementById('time').innerText = Math.round(end - start);
      document.getElementById('steps').innerText = steps;
    }

    async function backtrack(grid) {
      for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
          if (grid[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;
                board[row][col].value = num;
                steps++;
                await new Promise(r => setTimeout(r, 15));
                if (await backtrack(grid)) return true;
                grid[row][col] = 0;
                board[row][col].value = '';
              }
            }
            return false;
          }
        }
      }
      return true;
    }

    function seeSolution() {
      steps = 0;
      const grid = getGrid();
      const start = performance.now();
      solve(grid);
      const end = performance.now();
      document.getElementById('time').innerText = Math.round(end - start);
      document.getElementById('steps').innerText = steps;
      for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
          board[i][j].value = grid[i][j];
        }
      }
    }

    function solve(grid) {
      for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
          if (grid[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;
                steps++;
                if (solve(grid)) return true;
                grid[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    }

    function generateSudoku() {
      // 1. Fill full board using backtracking
      const fullGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
      fillGrid(fullGrid);
      // 2. Remove numbers to create a puzzle
      const puzzle = fullGrid.map(row => row.slice());
      let attempts = 40;
      while (attempts > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (puzzle[row][col] !== 0) {
          puzzle[row][col] = 0;
          attempts--;
        }
      }
      original = puzzle;
      for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
          board[i][j].value = puzzle[i][j] === 0 ? '' : puzzle[i][j];
          board[i][j].disabled = puzzle[i][j] !== 0;
        }
      }
      document.getElementById('steps').innerText = '0';
      document.getElementById('time').innerText = '0';
    }

    function fillGrid(grid) {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === 0) {
            shuffle(numbers);
            for (let num of numbers) {
              if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;
                if (fillGrid(grid)) return true;
                grid[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    }

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    createBoard();
    generateSudoku();