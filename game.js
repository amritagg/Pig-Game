var gamePlaying, activePlayer, roundScore, scores;
var x = prompt("Enter the final score!!!!");

main();

document.querySelector('.new-game').addEventListener('click', main);

document.querySelector('.roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice-image');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#player-score-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
    }
})

document.querySelector('.hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#player-final-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= x){
            document.querySelector('.player-name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice-image').style.display = 'none';
            document.querySelector('.player-name-' + activePlayer).classList.add('winner');
            document.querySelector('.player-name-' + activePlayer).classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
})

function main(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice-image').style.display = 'none';
    document.querySelector('.player-0-final').textContent = "0";
    document.querySelector('.player-0-score').textContent = "0";
    document.querySelector('.player-1-final').textContent = "0";
    document.querySelector('.player-1-score').textContent = "0";
    document.querySelector('.player-name-0').textContent = 'Player 1';
    document.querySelector('.player-name-1').textContent = 'Player 2';
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
}

function nextPlayer(){
    roundScore = 0;
    document.querySelector('.player-0-score').textContent = '0';
    document.querySelector('.player-1-score').textContent = '0';
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.dice-image').style.display = 'none';
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
}