const cells = document.querySelectorAll('.row > div ')
for (let i = 0; i < cells.length; i++) {
   cells[i].textContent
   cells[i].addEventListener ('click', cellClicked);
}

function cellClicked(e){
    if (e.target.textContent === '🦄' || e.target.textContent === '🐲') {
    return; 
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

//if (cells[0].textContent === '🦄' && cells[1].textContent === '🦄' && cells[2].textContent === '🦄') {
if (topWinU) {  
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
   }
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
    } 

    
if (centerWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    }
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
    } 
    return; 
    }

if (bottomWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
    } 
    return;
    }

if (leftWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
    }
    else {
        return;
    } 
    return;
    }

if (middleWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
}
    else {
        return;
    } 
    return;
}

if (rightWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
}
    else {
        return;
    } 
    return;
}

if (forwardWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
}
    else {
        return;
    } 
    return;
}

if (backWinU) {
    alert('🌈✨🎈✨🎊✨🌈Unicorn✨🦄✨WINS!🌈✨🎊✨🎈✨🌈')
    else if (topWinD) {
        alert('🔥✨🎈✨🎊✨🔥Dragon✨🐲✨WINS!🔥✨🎊✨🎈✨🔥')
}
    else {
        return;
    } 
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
   
 


 