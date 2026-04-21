const body = document.querySelector('body');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');


let hex = "0123456789ABCDEF";
function changeColor (){
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
}

let colorChanIntv;
startBtn.addEventListener('click', () => {
    if(!colorChanIntv){
        colorChanIntv = setInterval(changeColor, 1000);
    }
})

stopBtn.addEventListener('click', () => {
    clearInterval(colorChanIntv);
    colorChanIntv = null;
})
