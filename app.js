const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const playAgainMobile = document.getElementById('play-again-mobile');
const playAgain = document.getElementById('play-again');
const playerIconMobile = document.getElementById('playerIcon-mobile');
const computerIconMobile = document.getElementById('computerIcon-mobile');
const playerIcon = document.getElementById('playerIcon');
const computerIcon = document.getElementById('computerIcon');
const rulesButton = document.getElementById('rules-button');
const rulesOverlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

scissors.addEventListener('click', onHandleRSPClick);
rock.addEventListener('click', onHandleRSPClick);
paper.addEventListener('click', onHandleRSPClick);
playAgain.addEventListener('click', onHandlePlayAgain);
playAgainMobile.addEventListener('click', onHandlePlayAgain);
rulesButton.addEventListener('click', openRulesModal);
closeButton.addEventListener('click', closeRulesModal);
document.getElementById('play-again').style.display = 'none';
var score = 0;

function onHandleRSPClick  () {
    
    var chosen = this.id;
    
    if(chosen){
        handleComputerChoose(chosen);
    }
}

function handleComputerChoose (chosen) {
    var arr = ['rock', 'paper', 'scissors'];
    
    computerChosen = arr[Math.floor(Math.random() * arr.length)]; 
    
    if(computerChosen){
        document.getElementById('step-1').style.display = 'none';
        //if phone
        if($(window).width() <= '520'){
            document.getElementById('step-2-mobile').style.display = 'block';
        } else {
            document.getElementById('step-2').style.display = 'block';

        }
        
        handleShowIcons(chosen, computerChosen);
    }
}

function handleShowIcons(chosen, computerChosen){
    var placeholders = document.getElementsByClassName("icon-placeholder");
    
    if($(window).width() <= '520'){
        
        if(chosen != '') {
            
            placeholders[2].style.display = 'none';
            
            playerIconMobile.style.display = 'inline-block';
            playerIconMobile.getElementsByTagName('img')[0].src="images/icon-" + chosen + ".svg";
            playerIconMobile.classList.add(chosen+"-color");
            
        } 
        setTimeout(function() {
            
            placeholders[3].style.display = 'none';
            computerIconMobile.style.display = 'inline-block';
            computerIconMobile.getElementsByTagName('img')[0].src="images/icon-"+ computerChosen +".svg"; 
            computerIconMobile.classList.add(computerChosen+"-color");
            showWinner(chosen,computerChosen);
        }, 1000);     
    } else {
        if(chosen != '') {
            
            placeholders[0].style.display = 'none';
            playerIcon.style.display = 'inline-block';
            playerIcon.classList.add(chosen+"-color");
            playerIcon.getElementsByTagName('img')[0].src="images/icon-"+ chosen +".svg"; 
            
        } 
        setTimeout(function() {
            
            placeholders[1].style.display = 'none';
            computerIcon.style.display = 'inline-block';
            computerIcon.classList.add(computerChosen+"-color");
            computerIcon.getElementsByTagName('img')[0].src="images/icon-"+ computerChosen +".svg"; 
            showWinner(chosen,computerChosen);
        }, 1000); 
    }
    
}

function showWinner(chosen, computerChosen){
    
    var isWinner = calculateWinner(chosen, computerChosen);
    
    if($(window).width() <= '520'){
        if(isWinner == true){
            score ++;
            document.getElementById('score-number').innerHTML = score;
            document.getElementById('step-2-col-1-mobile').getElementsByClassName('behind-container')[0].style.display = 'inline-block';
            document.getElementById('step-2-row-2-mobile').getElementsByTagName('h1')[0].innerHTML = 'YOU WON';
            
        }
        if (isWinner == 'tie') {
            document.getElementById('step-2-row-2-mobile').getElementsByTagName('h1')[0].innerHTML = 'TIE';
        } 
        if(isWinner == false) {
            document.getElementById('step-2-col-3-mobile').getElementsByClassName('behind-container')[0].style.display = 'inline-block';

            document.getElementById('step-2-row-2-mobile').getElementsByTagName('h1')[0].innerHTML = 'YOU LOST';    
        }
        document.getElementById('play-again-mobile').style.display = 'block';
    } else {
        if(isWinner == true){
            score ++;
            document.getElementById('score-number').innerHTML = score;
            document.getElementById('step-2-col-1').getElementsByClassName('behind-container')[0].style.display = 'inline-block';
            document.getElementById('step-2-col-2').getElementsByTagName('h1')[0].innerHTML = 'YOU WON';
            
        }
        if (isWinner == 'tie') {
            document.getElementById('step-2-col-2').getElementsByTagName('h1')[0].innerHTML = 'TIE';
        } 
        if(isWinner == false) {
            document.getElementById('step-2-col-3').getElementsByClassName('behind-container')[0].style.display = 'inline-block';
            document.getElementById('step-2-col-2').getElementsByTagName('h1')[0].innerHTML = 'YOU LOST';    
        }
        document.getElementById('play-again').style.display = 'block';
    }
}

function calculateWinner(chosen, computerChosen){
    var isWinner = false;

    if(chosen == 'rock') {
        switch (computerChosen) {
            case 'paper':
                
                break;
    
            case 'scissors':
                isWinner = true;
                 break;

            case 'rock':
                isWinner = 'tie';
                break;
        
            default:
                break;
        }
    }

    if(chosen == 'paper') {
        switch (computerChosen) {
            case 'paper':
                isWinner = 'tie';
                break;
    
            case 'scissors':
                
                 break;

            case 'rock':
                isWinner = true;
                break;
        
            default:
                break;
        }
    }

    if(chosen == 'scissors') {
        switch (computerChosen) {
            case 'paper':
                isWinner = true;
                break;
    
            case 'scissors':
                isWinner = 'tie';
                 break;

            case 'rock':
                
                break;
        
            default:
                break;
        }
    }

    return isWinner;
    
}

function onHandlePlayAgain(){
    clearScreen();
    if($(window).width() <= '520'){
        document.getElementById('step-2-mobile').style.display = 'none';
        document.getElementById('step-1').style.display = 'block';
    } else {
        document.getElementById('step-2').style.display = 'none';
        document.getElementById('step-1').style.display = 'block';
    }
    
}

function clearScreen (){
    var placeholders = document.getElementsByClassName("icon-placeholder");
    var winningIndicators = document.getElementsByClassName("behind-container");
    for(i = 0; i < placeholders.length; i++){
        placeholders[i].style.display ='inline-block';
    }
    for(i = 0; i < winningIndicators.length; i++){
        
        winningIndicators[i].style.display = 'none';
    }
    playerIcon.getElementsByTagName('img')[0].src="";
    computerIcon.getElementsByTagName('img')[0].src=""; 
    playerIconMobile.getElementsByTagName('img')[0].src="";
    computerIconMobile.getElementsByTagName('img')[0].src="";
    playerIcon.style.display = 'none';
    computerIcon.style.display = 'none';
    playerIconMobile.style.display = 'none';
    computerIconMobile.style.display = 'none';
    computerIconMobile.className = "";
    playerIconMobile.className = "";
    computerIcon.className = "";
    playerIcon.className = "";

    document.getElementById('step-2-col-2').getElementsByTagName('h1')[0].innerHTML = '';
    document.getElementById('step-2-row-2-mobile').getElementsByTagName('h1')[0].innerHTML = '';
    document.getElementById('step-2-col-2-mobile').getElementsByTagName('h1')[0].innerHTML = '';
    document.getElementById('play-again').style.display= 'none';

}

function openRulesModal(){
    rulesOverlay.style.display ='block';
}

function closeRulesModal(){
    rulesOverlay.style.display ='none';
}
