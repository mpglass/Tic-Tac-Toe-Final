const cells = document.querySelectorAll('.row > div ')
for (let i = 0; i < cells.length; i++) {
   cells[i].textContent
   cells[i].addEventListener ('click', cellClicked);
}

function cellClicked(e){
    if (e.target.textContent === '🦄' || e.target.textContent === '🐲') {
    return; 
   }
}
   
   e.target.textContent = player;

let topWinU = (cells[0].textContent === '🦄' && cells[1].textContent === '🦄' && cells[2].textContent === '🦄');

let centerWinU = (cells[3].textContent === '🦄' && cells[4].textContent === '🦄' && cells[5].textContent === '🦄');

let bottomWinU = (cells[6].textContent === '🦄' && cells[7].textContent === '🦄' && cells[8].textContent === '🦄');

let leftWinU = (cells[0].textContent === '🦄' && cells[3].textContent === '🦄' && cells[6].textContent === '🦄');

let middleWinU = (cells[1].textContent === '🦄' && cells[4].textContent === '🦄' && cells[7].textContent === '🦄');

let rightWinU = (cells[2].textContent === '🦄' && cells[5].textContent === '🦄' && cells[8].textContent === '🦄');

let forwardWinU = (cells[2].textContent === '🦄' && cells[4].textContent === '🦄' && cells[6].textContent === '🦄');

let backWinU = (cells[0].textContent === '🦄' && cells[4].textContent === '🦄' && cells[8].textContent === '🦄');

let topWinD = (cells[0].textContent === '🐲' && cells[1].textContent === '🐲' && cells[2].textContent === '🐲');

let centerWinD = (cells[3].textContent === '🐲' && cells[4].textContent === '🐲' && cells[5].textContent === '🐲');

let bottomWinD = (cells[6].textContent === '🐲' && cells[7].textContent === '🐲' && cells[8].textContent === '🐲');

let leftWinD = (cells[0].textContent === '🐲' && cells[3].textContent === '🐲' && cells[6].textContent === '🐲');

let middleWinD = (cells[1].textContent === '🐲' && cells[4].textContent === '🐲' && cells[7].textContent === '🐲');

let rightWinD = (cells[2].textContent === '🐲' && cells[5].textContent === '🐲' && cells[8].textContent === '🐲');

let forwardWinD = (cells[2].textContent === '🐲' && cells[4].textContent === '🐲' && cells[6].textContent === '🐲');

let backWinD = (cells[0].textContent === '🐲' && cells[4].textContent === '🐲' && cells[8].textContent === '🐲');

if (topWinU) {  
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
   }
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return
} 

if (centerWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    }
    else if (centerWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
} 

if (bottomWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
}
    else if (bottomWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
    } 
    

if (leftWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
} 
    else if (leftWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
    } 

if (middleWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
}
    else if (middleWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
    }

if (rightWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
}
    else if (rightWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
}
    else {
        return;
    } 
  

if (forwardWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
}
    else if (forwardWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
}
    else {
        return;
    } 
  

if (backWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
}
    else if (backWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
}
    else {
        return;
    }
  
    togglePlayer();

function togglePlayer(){
    if (player === '🦄') {
        player = '🐲';
    } 
    else {
        player = '🦄';
    }
}