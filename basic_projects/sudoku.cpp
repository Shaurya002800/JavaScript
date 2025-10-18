#include <iostream>
using namespace std;

#define N 9

bool isSafe(int board[N][N], int row, int col, int num) {
    for (int x = 0; x < N; x++) {
        if (board[row][x] == num || board[x][col] == num)
            return false;
    }

    int startRow = row - row % 3, startCol = col - col % 3;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            if (board[i + startRow][j + startCol] == num)
                return false;

    return true;
}

bool solveSudoku(int board[N][N]) {
    int row = -1, col = -1;
    bool isEmpty = false;

    for (int i = 0; i < N && !isEmpty; i++) {
        for (int j = 0; j < N && !isEmpty; j++) {
            if (board[i][j] == 0) {
                row = i;
                col = j;
                isEmpty = true;
            }
        }
    }

    if (!isEmpty)
        return true;

    for (int num = 1; num <= 9; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board))
                return true;
            board[row][col] = 0; // backtrack
        }
    }
    return false;
}

void printBoard(int board[N][N]) {
    cout << "\nSolved Sudoku:\n";
    for (int r = 0; r < N; r++) {
        for (int d = 0; d < N; d++) {
            cout << board[r][d] << " ";
        }
        cout << endl;
    }
}

int main() {
    int board[N][N];

    cout << "Enter Sudoku puzzle (use 0 for empty cells):\n";
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cin >> board[i][j];
            if (board[i][j] < 0 || board[i][j] > 9) {
                cout << "Invalid input! Only numbers 0-9 allowed.\n";
                return 1;
            }
        }
    }

    if (solveSudoku(board))
        printBoard(board);
    else
        cout << "\nNo solution exists.\n";

    return 0;
}