export function displayHome(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    const div = document.createElement('div');
    div.innerText = 'This is the HOME page'
    content.appendChild(div);
}