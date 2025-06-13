export function displayAbout(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    const div = document.createElement('div');
    div.innerText = 'This is the ABOUT page'
    content.appendChild(div);
}