document.getElementById('gameStartButton').addEventListener('click', startGame);

document.getElementById('statTwoPlayer').addEventListener('click', checkComputerStat.bind(null, 'Two'));
document.getElementById('statThreePlayer').addEventListener('click', checkComputerStat.bind(null, 'Three'));
document.getElementById('statFourPlayer').addEventListener('click', checkComputerStat.bind(null, 'Four'));

document.getElementById('resetGame').addEventListener('click', endGame);

var playerCount = 0;
var computerCount = 0;
var winner = '';

function startGame(){
    getCardData();
    playerCount = 0;
    computerCount = 0;
    winner = '';
    updateScore();
    document.getElementById('gameStart').classList.remove('show');
}

function endGame(){
    document.getElementById('gameEnd').classList.add('show');
    document.getElementById('gameEndMessage').innerText = `${winner}`;
}

function updateScore(){
    if (playerCount >= 5) {
        winner = 'Player Wins!'
        endGame();
    }
    if (computerCount >= 5) {
        winner = 'Opponent Wins!'
        endGame();
    }
    document.getElementById('scorePlayer').innerHTML = 'Score: '+playerCount;
    document.getElementById('scoreComputer').innerHTML = 'Score: '+computerCount;
}

function checkComputerStat(statNumber){
    document.getElementById('stat'+statNumber+'Player').classList.add('playerSelectedPlayer');
    document.getElementById('stat'+statNumber+'Computer').classList.add('playerSelectedComputer');
    document.getElementById('statTwoComputer').classList.remove('hide');
    document.getElementById('statThreeComputer').classList.remove('hide');
    document.getElementById('statFourComputer').classList.remove('hide');
    compareStat(statNumber);
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
            
            document.getElementById('statOnePlayer').innerHTML = `${randomPlayer.DraftKingsName}`;
            document.getElementById('statTwoPlayer').innerHTML = `Height: ${playerHeight} Inches`;
            document.getElementById('statThreePlayer').innerHTML = `Weight: ${playerWeight} Lbs`;
            document.getElementById('statFourPlayer').innerHTML = `Experience: ${playerExperience} Years`;
            document.getElementById('imagePlayer').src = `${randomPlayer.PhotoUrl}`;

            let randomComputer = randomNumber(data);
            let computerHeight = `${randomComputer.Height}`;
            let computerWeight = `${randomComputer.Weight}`;
            let computerExperience = `${randomComputer.Experience}`;

            document.getElementById('statOneComputer').innerHTML = `${randomComputer.DraftKingsName}`;
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

function compareStat(statNumber){
    let stringPlayer = document.getElementById('stat'+statNumber+'Player').innerHTML;
    let stringComputer = document.getElementById('stat'+statNumber+'Computer').innerHTML;

    let valuePlayer = parseInt(stringPlayer.replace(/[^0-9]/g,''));
    let valueComputer = parseInt(stringComputer.replace(/[^0-9]/g,''));

    if(valuePlayer >= valueComputer){
        playerCount += 1
    } else {
        computerCount += 1
    }
    setTimeout(updateScore,1000);
    setTimeout(resetClasses,2000);
    setTimeout(getCardData,2000);
}