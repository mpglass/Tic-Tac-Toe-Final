const cells = document.querySelectorAll('.row > div ')
for (let i = 0; i < cells.length; i++) {
   cells[i].textContent
   cells[i].addEventListener ('click', cellClicked);
}

let player = '🦄';

function cellClicked(e){
    if (e.target.textContent === '🦄' || e.target.textContent === '🐲') {
    return; 
   }
   
   e.target.textContent = player;

let topWin = (cells[0].textContent === '🦄' && cells[1].textContent === '🦄' && cells[2].textContent === '🦄');

let centerWin = (cells[3].textContent === '🦄' && cells[4].textContent === '🦄' && cells[5].textContent === '🦄');

let bottomWin = (cells[6].textContent === '🦄' && cells[7].textContent === '🦄' && cells[8].textContent === '🦄');

let leftWin = (cells[0].textContent === '🦄' && cells[3].textContent === '🦄' && cells[6].textContent === '🦄');

let middleWin = (cells[1].textContent === '🦄' && cells[4].textContent === '🦄' && cells[7].textContent === '🦄');

let rightWin = (cells[2].textContent === '🦄' && cells[5].textContent === '🦄' && cells[8].textContent === '🦄');

let forwardWin = (cells[2].textContent === '🦄' && cells[4].textContent === '🦄' && cells[6].textContent === '🦄');

let backWin = (cells[0].textContent === '🦄' && cells[4].textContent === '🦄' && cells[8].textContent === '🦄');

//if (cells[0].textContent === '🦄' && cells[1].textContent === '🦄' && cells[2].textContent === '🦄') {
if (topWin) {  
    console.log ('Unicorn')
    return; 
}
    
if (centerWin) {
        console.log ('unicorn')
        return; 
}

if (bottomWin) {
        console.log ('unicorn')
        return;
}

if (leftWin) {
    console.log ('unicorn')
    return;
}

if (middleWin) {
    console.log ('unicorn')
    return;
}

if (rightWin) {
    console.log ('unicorn')
    return;
}

if (forwardWin) {
    console.log ('unicorn')
    return;
}

if (backWin) {
    console.log ('unicorn')
    return;
}

    togglePlayer();
}

function togglePlayer(){
    if (player === '🦄') {
        player = '🐲';
    } else {
        player = '🦄';
    }
}



// function (){
//     if ('winner🦄')
//     alert ('Unicorn Wins!');
//}
   
 


 