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
 
if (cells[0].textContent === '🦄' && cells[1].textContent === '🦄' && cells[2].textContent === '🦄') {
    console.log ('Unicorn')
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
   
 


 