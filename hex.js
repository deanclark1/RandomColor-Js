const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const h1 = document.querySelector('h1');

const btn = document.querySelector('button');
btn.addEventListener('click', function() {

    let hexColor = '#';
    for(let i =0; i < 6; i++){
        hexColor += colors[getRandom()];
    }
    h1.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

const getRandom = () => {
    return Math.floor(Math.random() * colors.length);
}