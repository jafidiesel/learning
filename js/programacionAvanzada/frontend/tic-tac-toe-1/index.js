const initializeGame = () =>{
    let player1Name = document.querySelector('#player1').value;
    let player2Name = document.querySelector('#player2').value;
    if(!player1Name || !player2Name) return false;
    savePlayersNames(player1Name, player2Name);
    
    cleanBoard();
    randomizeStartingPlayer();

}

const cleanBoard = () => {

    let boardElement = document.querySelector('#board');
    let rowArray = boardElement.querySelectorAll('tr');
    
    boardElement.style.display="block";

    for (let rowIndex = 0; rowIndex < rowArray.length; rowIndex++) {
        const rowElement = rowArray[rowIndex].querySelectorAll('td');

        for (let colIndex = 0; colIndex < rowElement.length; colIndex++) {
            const cellInput = rowElement[colIndex].querySelector('input');
            const cellButton = rowElement[colIndex].querySelector('button');

            //console.log("rowIndex", rowIndex, "colIndex",colIndex,"cellInput",cellInput);
            cellInput.value = "";
            cellButton.innerText = "";
            
        }
        
    }
}
const randomizeStartingPlayer = () => {
    const bigMessage = document.querySelector('#big-message');
    let playerName = "";
    if(Math.random() < 0.5){
        playerName = sessionStorage.getItem('player1Name');
    }else{
        playerName = sessionStorage.getItem('player2Name');
    }
    bigMessage.innerText = `Comienza a jugar jugador ${playerName}`;
}

const selectPosition = (idCell,value) => {
    console.log('selectPosition',idCell,value);
    document.querySelector(`#${idCell}`).parentElement.querySelector('input').value = ""
}
const checkGameStatus = () => {}
const declareAWinner = () => {}

const savePlayersNames = (name1, name2) => {
    sessionStorage.setItem('player1Name', name1);
    sessionStorage.setItem('player1Letter', "x");
    sessionStorage.setItem('player2Name', name2);
    sessionStorage.setItem('player2Letter', "0");
    console.log(sessionStorage.getItem('player1Name'));
    console.log(sessionStorage.getItem('player2Name'));
}

const updateCurrentPlayer = () =>{
    
}

initializeGame();