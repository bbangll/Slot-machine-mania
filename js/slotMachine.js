
/*----- constants -----*/
const valueSlot = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; 
const multiplierSlot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // How much the value gets multiplied by
const winLoseSlot = ['Won', 'Lost']; // Whether the money gets added on or subtracted from the current total

/*----- app's state (variables) -----*/

let currentTotal;
let selValueSlot;
let selMultiplierSlot;
let selWinLoseSlot;
let serviceCost;
let cashoutAmount;

/*----- cached element references -----*/

let spinnerTxt = document.querySelector('.spinnerText')
let totalTxt = document.querySelector('#totalTxt');
let valueTxt = document.querySelector('#valueTxt');
let multiplierTxt = document.querySelector('#multiplierTxt');
let winLoseTxt = document.querySelector('#winLoseTxt');
let inputValue = document.querySelector('input');
let inputButton = document.querySelector('#inputButton')
let spinButton = document.querySelector('#spin');
let cashOutButton = document.querySelector('#cashOut');
let checkSummaryButton = document.querySelector('.summaryHeader');
let summary = document.querySelector('#summary');
let currentAmount = document.querySelector('#currentAmountId');
let serviceCostTxt = document.querySelector('#serviceCostId')
let cashoutAmountTxt = document.querySelector('#cashoutAmountId')
let valueloader = document.querySelector('#valueLoader');
let multiplierLoader = document.querySelector('#multiplierLoader');
let winLoseLoader = document.querySelector('#winLoseLoader');
let closeButton = document.querySelector('#closeButton');
let openerClass = document.querySelector('.opener');


/*----- functions -----*/

function init() {
    currentTotal = 0;
    selValueSlot = 0;
    selMultiplierSlot = 0;
    selWinLoseSlot = 'Won';
    serviceCost = 0; 
    cashoutAmount = 0;
    render();
}

function userInput() { // Grabs the user input and updates the currentTotal
    let total = inputValue.value;
    total = parseInt(total);
    currentTotal = total + currentTotal
    render();
    return currentTotal;
}


function loaderStart() { // Creates the initial display for the spinner class as the user clicks on spion
    valueTxt.style.display = 'none';
    multiplierTxt.style.display = 'none';
    winLoseTxt.style.display = 'none';
    valueLoader.style.display = 'flex';
    multiplierLoader.style.display = 'flex';
    winLoseLoader.style.display = 'flex';
}

function valueSlotOp() {
    let value = valueSlot[Math.floor(Math.random() * valueSlot.length)]; // finds a random number for the valueSlot
    setTimeout(function(){ // Display the animation for 2s before displaying the text
        valueLoader.style.display = 'none';
        valueTxt.style.display = 'flex';
    }, 2000);
    return value;
}

function multiplierSlotOp() {
    let value = multiplierSlot[Math.floor(Math.random() * multiplierSlot.length)]; // finds a random multiplier for the multiplieSlot
    setTimeout(function(){ 
        multiplierLoader.style.display = 'none';
        multiplierTxt.style.display = 'flex';
    }, 4000);
    return value;
}

function winLoseSlotOp() {
    let value = winLoseSlot[Math.floor(Math.random() * winLoseSlot.length)]; // randomly finds if they win or lose for winLoseSlot
    setTimeout(function(){ 
        winLoseLoader.style.display = 'none';
        winLoseTxt.style.display = 'flex';
    }, 6000);
    return value; 
}


function currentTotalOp() { // Calculates the total operation of all the slots
    if (selWinLoseSlot === 'Won') {
        let value = (selValueSlot * selMultiplierSlot) + currentTotal; // If user 'won' then add to the currentTotal
        return value;
    } else if (selWinLoseSlot === 'Lost') {
        let value = currentTotal - (selValueSlot * selMultiplierSlot); // if user 'lost' then minus from the current Total
        return value;
    };
}

function spinner() { // runs all the slot functions as the user clicks on spin

    loaderStart();

    selValueSlot = valueSlotOp();
    selMultiplierSlot = multiplierSlotOp();
    selWinLoseSlot = winLoseSlotOp();
    currentTotal = currentTotalOp();
    serviceCost = serviceCostOp();
    cashoutAmount = cashoutAmountOp();
    render();
}

function render() { // Re-rendering all the dom-elements that needs up to be updated
    totalTxt.innerText = '$' + currentTotal + '.00';
    valueTxt.innerText = '$' + selValueSlot;
    multiplierTxt.innerText = 'x' + selMultiplierSlot;
    winLoseTxt.innerText = selWinLoseSlot;
    currentAmount.innerText = '$' + currentTotal + '.00';
    serviceCostTxt.innerText = '$' + serviceCost + '.00';
    cashoutAmountTxt.innerText = '$' + cashoutAmount + '.00';
}

function checkSummaryOp() { // Elements thats need to shown as the user clicks on checkSummary
    summary.style.display = 'block'; 
    closeButton.style.display = 'flex';   
    openerClass.style.justifyContent = "space-between";
}

function serviceCostOp() { // Calculates the service cost for clicking the spinning function
    let value = serviceCost + 10;
    return value;
}

function cashoutAmountOp() { // Calculates how much the user would get or owe for the service
    let value = currentTotal - serviceCost;
    return value;
}

function closeButtonOp() { // Elements that needs to be displayed as the user clicks on the close button
    closeButton.style.display = 'none';
    openerClass.style.justifyContent = "center";
    summary.style.display = 'none';
}


/*----- event listeners -----*/


init();
inputButton.addEventListener('click', userInput);
spinButton.addEventListener('click', spinner);
cashOutButton.addEventListener('click', init);
checkSummaryButton.addEventListener('click', checkSummaryOp);
closeButton.addEventListener('click', closeButtonOp);



