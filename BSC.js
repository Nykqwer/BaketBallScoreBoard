
let homeBtn = document.getElementById("home-btn");
let guestBtn = document.getElementById("guest-btn");
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let homecount = 0;
let guestcount = 0;

function homeBtn1(){
    homecount += 1;
    homeBtn.textContent = homecount;

}

function homeBtn2(){
    homecount += 2;
    homeBtn.textContent = homecount;
    
}

function homeBtn3(){
    homecount += 3;
    homeBtn.textContent = homecount; 
}

function guestBtn1(){
    guestcount  += 1;
    guestBtn.textContent = guestcount;

}

function guestBtn2(){
    guestcount  += 2;
    guestBtn.textContent = guestcount;
    
}

function guestBtn3(){
    guestcount += 3;
    guestBtn.textContent = guestcount;
}

function saveScore(){
    let homeSum = homecount + " -- ";
    let guestSum = guestcount + " -- ";
    homeEl.textContent += homeSum;
    guestEl.textContent += guestSum;
    homecount = 0;
    guestcount = 0;
    homeBtn.textContent = 0;
    guestBtn.textContent = 0;

}

function resetScore(){
    homeEl.textContent = "Home Count: ";
    guestEl.textContent = "Guest Count: ";
    homecount = 0;
    guestcount = 0;
    homeBtn.textContent = 0;
    guestBtn.textContent = 0;
}





