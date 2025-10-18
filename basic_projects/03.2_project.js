const Time = document.querySelector('.Time')

setInterval( () =>{
    let date = new Date();
    Time.innerHTML.sty
    Time.innerHTML = date.toLocaleTimeString();
},1000);
