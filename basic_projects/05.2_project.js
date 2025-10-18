const color = '0123456789ABCDEF'
let num ;
const body = document.querySelector('#body')


const generate = () => {
    let rancolor  = '#'
    for (let i = 0; i < 6; i++){
        rancolor = rancolor + color[ Math.floor(Math.random() * 16)]
    }
    return rancolor 
};

let intervalId
const startChanging = function(){
    if( !intervalId){
        intervalId = setInterval(changeBgColor, 1000 )
    }
 
    function changeBgColor(){
        document.body.style.backgroundColor = generate()
    }
}

const stopChanging = function(){
    clearInterval(intervalId);
    intervalId = null;
    // document.body.style.backgroundColor = "#212121"
};


document.querySelector("#start").addEventListener('click', startChanging)

document.querySelector("#stop").addEventListener('click',stopChanging)


