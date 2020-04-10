const cells = document.querySelectorAll('.row > div ')
for (let i = 0; i < cells.length; i++) {
   cells[i].textContent
   cells[i].addEventListener ('click', cellclicked);
}

let player = '🦄';

function cellclicked(e){
    e.target.textContent = player;

    if (player === '🦄') {
        player = '🐲';
    } else {
        player = '🦄';
    }
}


 