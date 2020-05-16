const cells = document.querySelectorAll('.row > div ')

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let player = '🦄';
let gameOver = false;
let moves = 0;

function cellClicked(event) {
    console.log(event.target);
    if (gameOver) {
        resetBoard();
        return;
    }
    
    if (event.target.textContent === '🦄' || event.target.textContent === '🐲') {
        return;
    }

    event.target.textContent = player;

    checkWinner();

    togglePlayer();

    moves++;
    if (moves === 9){
        draw();
    }
}

function checkWinner() {
    if (cells[0].textContent === '🦄' && cells[1].textContent === '🦄' && cells[2].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[3].textContent === '🦄' && cells[4].textContent === '🦄' && cells[5].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[6].textContent === '🦄' && cells[7].textContent === '🦄' && cells[8].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[6].textContent === '🦄' && cells[7].textContent === '🦄' && cells[8].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[0].textContent === '🦄' && cells[3].textContent === '🦄' && cells[6].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[1].textContent === '🦄' && cells[4].textContent === '🦄' && cells[7].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[2].textContent === '🦄' && cells[5].textContent === '🦄' && cells[8].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[2].textContent === '🦄' && cells[4].textContent === '🦄' && cells[6].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[0].textContent === '🦄' && cells[4].textContent === '🦄' && cells[8].textContent === '🦄') {
        unicornWins();
    }
    else if (cells[0].textContent === '🐲' && cells[1].textContent === '🐲' && cells[2].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[3].textContent === '🐲' && cells[4].textContent === '🐲' && cells[5].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[6].textContent === '🐲' && cells[7].textContent === '🐲' && cells[8].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[6].textContent === '🐲' && cells[7].textContent === '🐲' && cells[8].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[0].textContent === '🐲' && cells[3].textContent === '🐲' && cells[6].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[1].textContent === '🐲' && cells[4].textContent === '🐲' && cells[7].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[2].textContent === '🐲' && cells[5].textContent === '🐲' && cells[8].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[2].textContent === '🐲' && cells[4].textContent === '🐲' && cells[6].textContent === '🐲') {
        dragonWins();
    }
    else if (cells[0].textContent === '🐲' && cells[4].textContent === '🐲' && cells[8].textContent === '🐲') {
        dragonWins();
    }
};

function togglePlayer() {
    if (player === '🦄') {
        player = '🐲';
    }
    else {
        player = '🦄';
    }
};

function resetBoard() {
    location.reload();
};

function unicornWins() {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈');
    gameOver = true;
    console.log('Unicorn wins!');
    resetBoard();
};

function dragonWins() {
    alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥');
    gameOver = true;
    console.log('Dragon wins!')
    resetBoard();
};

function draw() {
    alert('💥💀💥Game is over,😭😭😭 no one wins💥💀💥');
    gameOver = true
    resetBoard();
}



