const insertDiv = document.querySelector('#insert');

window.addEventListener('keydown',(e) => {
    insertDiv.innerHTML = `
    <div class="table">
    <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>`
})