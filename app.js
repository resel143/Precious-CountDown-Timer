let name = 'selena';
console.log(name);

let time = document.getElementById('clock').value;

document.getElementById('start').addEventListener('click',function(){
    console.log(time);
});

let start = document.getElementById('start');
let stop= document.getElementById('stop');
let reset = document.getElementById('reset');
let timeMinutes = document.querySelector("#inputTime").elements[0];
let timeSeconds = document.querySelector("#inputTime").elements[1];
let showClock = document.getElementById('clock');


start.addEventListener('click', function(){
    pehlibaar(timeMinutes.value,timeSeconds.value);
    showTime(timeMinutes.value,timeSeconds.value);
    
})
stop.addEventListener('click', function(){
    rukjaa();
    
})
reset.addEventListener('click', function(){
    // console.log(whatisthetime);
    pehlibaar(timeMinutes.value,timeSeconds.value);
    rukjaa();
    
})


var donetimer;
let ele = document.createElement('h2');
ele.className='showingTimer';


function pehlibaar(minele, secele){
    let whatisthetime = minele + " : "+ secele;
    ele.innerHTML = whatisthetime;
    showClock.appendChild(ele);
}
function showTime(minele, secele){
    ele.innerHTML = minele + " : "+ secele;

    donetimer = setTimeout(() => {
            
                secele=secele-1;
            if(minele>0){
                if(secele===0){
                minele=minele-1;
                secele=60;}
                
                showTime(minele,secele);
            }
            else{
                if(secele>0){
                    showTime(minele,secele);
                }else{
                    ele.innerHTML = minele + " : "+ secele;
                    rukjaa();
                }
            }
            
        // }
    }, 1000);
}

function rukjaa(){
    clearTimeout(donetimer);
}

