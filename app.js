const cells = document.querySelectorAll('.row > div ')
for (let i = 0; i < cells.length; i++) {
   cells[i].textContent
   cells[i].addEventListener ('click', cellClicked);
}

let player = '🦄'     
let gameOver = 'false'
let unicornWins = [
    (cells[0].textContent === '🦄' && cells[1].textContent === '🦄' && cells[2].textContent === '🦄') ||
    (cells[3].textContent === '🦄' && cells[4].textContent === '🦄' && cells[5].textContent === '🦄') ||
    (cells[6].textContent === '🦄' && cells[7].textContent === '🦄' && cells[8].textContent === '🦄') ||
    (cells[6].textContent === '🦄' && cells[7].textContent === '🦄' && cells[8].textContent === '🦄') ||
    (cells[0].textContent === '🦄' && cells[3].textContent === '🦄' && cells[6].textContent === '🦄') ||
    (cells[1].textContent === '🦄' && cells[4].textContent === '🦄' && cells[7].textContent === '🦄') ||
    (cells[2].textContent === '🦄' && cells[5].textContent === '🦄' && cells[8].textContent === '🦄') ||
    (cells[2].textContent === '🦄' && cells[4].textContent === '🦄' && cells[6].textContent === '🦄') ||
    (cells[0].textContent === '🦄' && cells[4].textContent === '🦄' && cells[8].textContent === '🦄') 
]
let dragonWins = [
    (cells[0].textContent === '🐲' && cells[1].textContent === '🐲' && cells[2].textContent === '🐲') ||
    (cells[3].textContent === '🐲' && cells[4].textContent === '🐲' && cells[5].textContent === '🐲') ||
    (cells[6].textContent === '🐲' && cells[7].textContent === '🐲' && cells[8].textContent === '🐲') ||
    (cells[6].textContent === '🐲' && cells[7].textContent === '🐲' && cells[8].textContent === '🐲') ||
    (cells[0].textContent === '🐲' && cells[3].textContent === '🐲' && cells[6].textContent === '🐲') ||
    (cells[1].textContent === '🐲' && cells[4].textContent === '🐲' && cells[7].textContent === '🐲') ||
    (cells[2].textContent === '🐲' && cells[5].textContent === '🐲' && cells[8].textContent === '🐲') ||
    (cells[2].textContent === '🐲' && cells[4].textContent === '🐲' && cells[6].textContent === '🐲') ||
    (cells[0].textContent === '🐲' && cells[4].textContent === '🐲' && cells[8].textContent === '🐲')
]
function cellClicked(e) {
    e.target.textContent = player;
    if (gameOver) {
        resetBoard();
        return; 
    }

    if (e.target.textContent === '🦄' || e.target.textContent === '🐲')  { 
        return;
    }
    
    e.target.textContent = player;

    checkWinU();

    checkWinD();

    togglePlayer();
}
function checkWinner() {
    if (unicornWins) {
        alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    }
    else if (dragonWins) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else ( togglePlayer)
}

function togglePlayer(){
    if (player === '🦄') {
        player = '🐲';
    } 
    else {
        player = '🦄';
    }
}

function resetBoard() {
    gameOver = 'false';
    player = '🦄';
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
     }

}
//{unicornWins = 
//{dragonWins =
