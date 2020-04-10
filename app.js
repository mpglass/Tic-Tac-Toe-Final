const cells = document.querySelectorAll('.row > div ')
for (let i = 0; i < cells.length; i++) {
   cells[i].textContent
   cells[i].addEventListener ('click', cellClicked);
}

let player = '🦄';

function cellClicked(e){
    if (e.target.textContent === '🦄') {
    return; 
   }
   if (e.target.textContent === '🐲') {
    return;
   }
   e.target.textContent = player;

    togglePlayer();
}

function togglePlayer(){
    if (player === '🦄') {
        player = '🐲';
    } else {
        player = '🦄';
    }
}
  
   
 


 