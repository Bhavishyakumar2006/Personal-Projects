const clockPara = document.querySelector('.clockPara');

setInterval(() => {    
    const date = new Date();
    // console.log(date.toLocaleTimeString())
    clockPara.innerHTML = date.toLocaleTimeString();
    
},1000);