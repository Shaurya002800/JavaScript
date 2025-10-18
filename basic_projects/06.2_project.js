const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class = 'color'> 
    <table style= "padding-top: 100px; padding-left :650px" font-size: 50px>
    <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === ' '?'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `
})