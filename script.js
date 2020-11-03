document.getElementById('gameStart').addEventListener('click', startGame);
document.getElementById('statTwoPlayer').addEventListener('click', checkComputerStatTwo);
document.getElementById('statThreePlayer').addEventListener('click', checkComputerStatThree);
document.getElementById('statFourPlayer').addEventListener('click', checkComputerStatFour);

let playerCount = 0;
let computerCount = 0;


function startGame(){
    getCardData();
    document.getElementById('gameStart').classList.remove('show');
    setScore();
}

function setScore(){
    playerCount = 0;
    computerCount = 0;
    document.getElementById('scorePlayer').innerHTML = 'Score: '+playerCount;
    document.getElementById('scoreComputer').innerHTML = 'Score: '+computerCount;
}

function updateScore(){
    document.getElementById('scorePlayer').innerHTML = 'Score: '+playerCount;
    document.getElementById('scoreComputer').innerHTML = 'Score: '+computerCount;
    // If score reaches a level end the game and declare winner
}

function checkComputerStatTwo(){
    document.getElementById('statTwoPlayer').classList.add('playerSelectedPlayer');
    document.getElementById('statTwoComputer').classList.add('playerSelectedComputer');
    compareStatTwo();
}

function checkComputerStatThree(){
    document.getElementById('statThreePlayer').classList.add('playerSelectedPlayer');
    document.getElementById('statThreeComputer').classList.add('playerSelectedComputer');
    compareStatThree();
}

function checkComputerStatFour(){
    document.getElementById('statFourPlayer').classList.add('playerSelectedPlayer');
    document.getElementById('statFourComputer').classList.add('playerSelectedComputer');
    compareStatFour();
}

function removeSelectedClass(){
    document.getElementById('statTwoPlayer').classList.remove('playerSelectedPlayer');
    document.getElementById('statTwoComputer').classList.remove('playerSelectedComputer');
    document.getElementById('statThreePlayer').classList.remove('playerSelectedPlayer');
    document.getElementById('statThreeComputer').classList.remove('playerSelectedComputer');
    document.getElementById('statFourPlayer').classList.remove('playerSelectedPlayer');
    document.getElementById('statFourComputer').classList.remove('playerSelectedComputer');
}

function getCardData(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.sportsdata.io/v3/nba/scores/json/Players?key=ba30341c670243aaa3d899542494a02a', true);

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

    let valuePlayer = stringPlayer.replace(/[^0-9]/g,'');
    let valueComputer = stringComputer.replace(/[^0-9]/g,'');

    console.log(valuePlayer);
    console.log(valueComputer);

    if(valuePlayer >= valueComputer){
        playerCount += 1
    } else {
        computerCount += 1
    }
    updateScore();
    removeSelectedClass();
    getCardData();
}

function compareStatThree(){
    let stringPlayer = document.getElementById('statThreePlayer').innerHTML;
    let stringComputer = document.getElementById('statThreeComputer').innerHTML;

    let valuePlayer = stringPlayer.replace(/[^0-9]/g,'');
    let valueComputer = stringComputer.replace(/[^0-9]/g,'');

    console.log(valuePlayer);
    console.log(valueComputer);

    if(valuePlayer >= valueComputer){
        playerCount += 1
    } else {
        computerCount += 1
    }
    updateScore();
    removeSelectedClass();
    getCardData();
}

function compareStatFour(){
    let stringPlayer = document.getElementById('statFourPlayer').innerHTML;
    let stringComputer = document.getElementById('statFourComputer').innerHTML;

    let valuePlayer = stringPlayer.replace(/[^0-9]/g,'');
    let valueComputer = stringComputer.replace(/[^0-9]/g,'');

    console.log(valuePlayer);
    console.log(valueComputer);

    if(valuePlayer >= valueComputer){
        playerCount += 1
    } else {
        computerCount += 1
    }
    updateScore();
    removeSelectedClass();
    getCardData();
}