export function displayMenu(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    const div = document.createElement('div');
    div.innerText = 'This is the MENU page'
    content.appendChild(div);
}