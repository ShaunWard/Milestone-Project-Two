document.getElementById('gameStart').addEventListener('click', startGame);
document.getElementById('statTwoPlayer').addEventListener('click', checkComputerStatTwo);
document.getElementById('statThreePlayer').addEventListener('click', checkComputerStatThree);
document.getElementById('statFourPlayer').addEventListener('click', checkComputerStatFour);

let playerCount = 0;
let computerCount = 0;


function startGame(){
    getCardData();
    playerCount = 0;
    computerCount = 0;
    updateScore();
    document.getElementById('gameStart').classList.remove('show');
}

function updateScore(){
    if (playerCount >= 5) {
        alert('Player wins!')
    }
    if (computerCount >= 5) {
        alert('Opponent wins!')
    }
    document.getElementById('scorePlayer').innerHTML = 'Score: '+playerCount;
    document.getElementById('scoreComputer').innerHTML = 'Score: '+computerCount;
}

function checkComputerStatTwo(){
    // let selected2 = document.querySelector('button').classList.contains('playerSelectedPlayer');
    // console.log(selected2);
    // if(selected2 = false){
    document.getElementById('statTwoPlayer').classList.add('playerSelectedPlayer');
    document.getElementById('statTwoComputer').classList.add('playerSelectedComputer');
    document.getElementById('statTwoComputer').classList.remove('hide');
    document.getElementById('statThreeComputer').classList.remove('hide');
    document.getElementById('statFourComputer').classList.remove('hide');
    compareStatTwo();
}

function checkComputerStatThree(){
    // let selected3 = document.querySelector('button').classList.contains('playerSelectedPlayer');
    // console.log(selected3);
    // if(selected3 = false){
    document.getElementById('statThreePlayer').classList.add('playerSelectedPlayer');
    document.getElementById('statThreeComputer').classList.add('playerSelectedComputer');
    document.getElementById('statTwoComputer').classList.remove('hide');
    document.getElementById('statThreeComputer').classList.remove('hide');
    document.getElementById('statFourComputer').classList.remove('hide');
    compareStatThree();
}

function checkComputerStatFour(){
    // let selected4 = document.querySelector('button').classList.contains('playerSelectedPlayer');
    // console.log(selected4);
    // if(selected4 = false){
    document.getElementById('statFourPlayer').classList.add('playerSelectedPlayer');
    document.getElementById('statFourComputer').classList.add('playerSelectedComputer');
    document.getElementById('statTwoComputer').classList.remove('hide');
    document.getElementById('statThreeComputer').classList.remove('hide');
    document.getElementById('statFourComputer').classList.remove('hide');
    compareStatFour();
}

function resetClasses(){
    // Remove player selection from both cards
    document.getElementById('statTwoPlayer').classList.remove('playerSelectedPlayer');
    document.getElementById('statTwoComputer').classList.remove('playerSelectedComputer');
    document.getElementById('statThreePlayer').classList.remove('playerSelectedPlayer');
    document.getElementById('statThreeComputer').classList.remove('playerSelectedComputer');
    document.getElementById('statFourPlayer').classList.remove('playerSelectedPlayer');
    document.getElementById('statFourComputer').classList.remove('playerSelectedComputer');
    // Add hide class back to computer card
    document.getElementById('statTwoComputer').classList.add('hide');
    document.getElementById('statThreeComputer').classList.add('hide');
    document.getElementById('statFourComputer').classList.add('hide');
}

function getCardData(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.sportsdata.io/v3/nba/scores/json/Players?key=', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);

            function randomNumber(data){
                return data[Math.floor(Math.random() * 510)];
            }

            let randomPlayer = randomNumber(data);
            
            console.log(randomPlayer);

            let playerHeight = `${randomPlayer.Height}`;
            let playerWeight = `${randomPlayer.Weight}`;
            let playerExperience = `${randomPlayer.Experience}`;
            
            document.getElementById('statOnePlayer').innerHTML = `Name: ${randomPlayer.DraftKingsName}`;
            document.getElementById('statTwoPlayer').innerHTML = `Height: ${playerHeight} Inches`;
            document.getElementById('statThreePlayer').innerHTML = `Weight: ${playerWeight} Lbs`;
            document.getElementById('statFourPlayer').innerHTML = `Experience: ${playerExperience} Years`;
            document.getElementById('imagePlayer').src = `${randomPlayer.PhotoUrl}`;

            let randomComputer = randomNumber(data);
            let computerHeight = `${randomComputer.Height}`;
            let computerWeight = `${randomComputer.Weight}`;
            let computerExperience = `${randomComputer.Experience}`;

            document.getElementById('statOneComputer').innerHTML = `Name: ${randomComputer.DraftKingsName}`;
            document.getElementById('statTwoComputer').innerHTML = `Height: ${computerHeight} Inches`;
            document.getElementById('statThreeComputer').innerHTML = `Weight: ${computerWeight} Lbs`;
            document.getElementById('statFourComputer').innerHTML = `Experience: ${computerExperience} Years`;
            document.getElementById('imageComputer').src = `${randomComputer.PhotoUrl}`;

            console.log(playerHeight);
            console.log(playerWeight);
            console.log(playerExperience);
        }
        
    }
    xhr.send();
}

function compareStatTwo(){
    let stringPlayer = document.getElementById('statTwoPlayer').innerHTML;
    let stringComputer = document.getElementById('statTwoComputer').innerHTML;

    let valuePlayer = parseInt(stringPlayer.replace(/[^0-9]/g,''));
    let valueComputer = parseInt(stringComputer.replace(/[^0-9]/g,''));

    // console.log(valuePlayer);
    // console.log(valueComputer);

    if(valuePlayer >= valueComputer){
        playerCount += 1
    } else {
        computerCount += 1
    }
    setTimeout(updateScore,1000);
    setTimeout(resetClasses,2000);
    setTimeout(getCardData,2000);
}

function compareStatThree(){
    let stringPlayer = document.getElementById('statThreePlayer').innerHTML;
    let stringComputer = document.getElementById('statThreeComputer').innerHTML;

    let valuePlayer = parseInt(stringPlayer.replace(/[^0-9]/g,''));
    let valueComputer = parseInt(stringComputer.replace(/[^0-9]/g,''));

    // console.log(valuePlayer);
    // console.log(valueComputer);

    if(valuePlayer >= valueComputer){
        playerCount += 1
    } else {
        computerCount += 1
    }
    setTimeout(updateScore,1000);
    setTimeout(resetClasses,2000);
    setTimeout(getCardData,2000);
}

function compareStatFour(){
    let stringPlayer = document.getElementById('statFourPlayer').innerHTML;
    let stringComputer = document.getElementById('statFourComputer').innerHTML;

    let valuePlayer = parseInt(stringPlayer.replace(/[^0-9]/g,''));
    let valueComputer = parseInt(stringComputer.replace(/[^0-9]/g,''));

    // console.log(typeof(valuePlayer));
    // console.log(valueComputer);

    if(valuePlayer >= valueComputer){
        playerCount += 1
    } else {
        computerCount += 1
    }
    setTimeout(updateScore,1000);
    setTimeout(resetClasses,2000);
    setTimeout(getCardData,2000);
}