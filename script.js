document.getElementById('gameStart').addEventListener('click', startGame);
document.getElementById('statTwoPlayer').addEventListener('click', checkComputerStatTwo);
document.getElementById('statThreePlayer').addEventListener('click', checkComputerStatThree);
document.getElementById('statFourPlayer').addEventListener('click', checkComputerStatFour);

let playerCount = '0';
let computerCount = '0';


function startGame(){
    getCardData();
    document.getElementById('gameStart').classList.remove('show');
    document.getElementById('playerCard').classList.add('flip');
    document.getElementById('scorePlayer').innerHTML = 'Score: '+playerCount;
    document.getElementById('scoreComputer').innerHTML = 'Score: '+playerCount;
}

function updateScore(){
    document.getElementById('scorePlayer').innerHTML(`<p>Will this work</p>`);
}

function checkComputerStatTwo(){
    document.getElementById('statTwoPlayer').classList.add('playerSelected');
    document.getElementById('computerCard').classList.add('flip');
    document.getElementById('statTwoComputer').classList.add('playerSelected');
}

function checkComputerStatThree(){
    document.getElementById('statThreePlayer').classList.add('playerSelected');
    document.getElementById('computerCard').classList.add('flip');
    document.getElementById('statThreeComputer').classList.add('playerSelected');
}

function checkComputerStatFour(){
    document.getElementById('statFourPlayer').classList.add('playerSelected');
    document.getElementById('computerCard').classList.add('flip');
    document.getElementById('statFourComputer').classList.add('playerSelected');
}

function getCardData(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.sportsdata.io/v3/nba/scores/json/Players?key=', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            
            document.getElementById('statOnePlayer').innerHTML = `Name: ${data[0].DraftKingsName}`;
            document.getElementById('statTwoPlayer').innerHTML = `Height: ${data[0].Height}`;
            document.getElementById('statThreePlayer').innerHTML = `Weight: ${data[0].Weight}`;
            document.getElementById('statFourPlayer').innerHTML = `Experience: ${data[0].Experience}`;
            document.getElementById('imagePlayer').src = `${data[0].PhotoUrl}`;
        }
        
    }
    xhr.send();
}