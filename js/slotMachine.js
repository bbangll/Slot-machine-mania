
/*----- constants -----*/
const valueSlot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const multiplierSlot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // How much the value gets multiplied by
const winLoseSlot = ['Won', 'Lost']; // Whether the money gets added on or subtracted from the current total

/*----- app's state (variables) -----*/

let currentTotal = 0;
let selValueSlot = 0;
let selMultiplierSlot = 0;
let selWinLoseSlot = 'Won';
let serviceCost = 0;
let cashoutAmount = 0;

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

function userInput() { // When the user adds in an input and click the submit button, this function should update the value of currentValue
    let total = inputValue.value;
    total = parseInt(total);
    currentTotal = total + currentTotal
    render();
    return currentTotal;
}

// run animation on the function, then set timeout after 1,2,3s run the display none function
function loaderStart() {
    valueTxt.style.display = 'none';
    multiplierTxt.style.display = 'none';
    winLoseTxt.style.display = 'none';
    valueLoader.style.display = 'flex';
    multiplierLoader.style.display = 'flex';
    winLoseLoader.style.display = 'flex';
}

function valueSlotOp() {
    let value = valueSlot[Math.floor(Math.random() * valueSlot.length)]; // finds a random number from the array
    setTimeout(function(){ 
        valueLoader.style.display = 'none';
        valueTxt.style.display = 'flex';
    }, 2000);
    return value;
}

function multiplierSlotOp() {
    let value = multiplierSlot[Math.floor(Math.random() * multiplierSlot.length)]; // finds a random multiplier from the array
    setTimeout(function(){ 
        multiplierLoader.style.display = 'none';
        multiplierTxt.style.display = 'flex';
    }, 4000);
    return value;
}

function winLoseSlotOp() {
    let value = winLoseSlot[Math.floor(Math.random() * winLoseSlot.length)]; // randomly finds if they win or lose the money
    setTimeout(function(){ 
        winLoseLoader.style.display = 'none';
        winLoseTxt.style.display = 'flex';
    }, 6000);
    return value; // But doesnt return the value, it stays as return
}


function currentTotalOp() {
    if (selWinLoseSlot === 'Won') {
        console.log(selValueSlot, selMultiplierSlot, selWinLoseSlot, currentTotal);
        let value = (selValueSlot * selMultiplierSlot) + currentTotal; // Checking if it's adding and multiplying the correct amount
        return value;
    } else if (selWinLoseSlot === 'Lost') {
        console.log(selValueSlot, selMultiplierSlot, selWinLoseSlot, currentTotal);
        let value = currentTotal - (selValueSlot * selMultiplierSlot); // Checking if it's adding and multiplying the correct amount
        return value;
    };
}

function checkSummaryOp() {
    summary.style.display = 'block'; 
    closeButton.style.display = 'flex';   
    openerClass.style.justifyContent = "space-between";
}

function serviceCostOp() {
    let value = serviceCost + 10;
    return value;
}

function cashoutAmountOp() {
    let value = currentTotal - serviceCost;
    return value;
}

function closeButtonOp() {
    closeButton.style.display = 'none';
    openerClass.style.justifyContent = "center";
    summary.style.display = 'none';
}

function spinner() { // focused here render and init

    loaderStart();

    selValueSlot = valueSlotOp();
    console.log('value: ' + selValueSlot);
    selMultiplierSlot = multiplierSlotOp();
    console.log('multiplier: ' + selMultiplierSlot);
    selWinLoseSlot = winLoseSlotOp();
    console.log('winLose: ' + selWinLoseSlot);
    console.log('totalbefore: ' + currentTotal);
    currentTotal = currentTotalOp();
    console.log('total: ' + currentTotal);
    serviceCost = serviceCostOp();
    console.log('serviceCost: ' + serviceCost);
    cashoutAmount = cashoutAmountOp();
    console.log('cashoutAmount: ' + cashoutAmount);
    render();
}

function render() {
    totalTxt.innerText = '$' + currentTotal + '.00';
    valueTxt.innerText = '$' + selValueSlot;
    multiplierTxt.innerText = 'x' + selMultiplierSlot;
    winLoseTxt.innerText = selWinLoseSlot;
    currentAmount.innerText = '$' + currentTotal + '.00';
    serviceCostTxt.innerText = '$' + serviceCost + '.00';
    cashoutAmountTxt.innerText = '$' + cashoutAmount + '.00';
}

// init is just initialising
// render is just doing the logic and displaying what needs to changed

/*----- event listeners -----*/


init();

inputButton.addEventListener('click', userInput);
spinButton.addEventListener('click', spinner);
cashOutButton.addEventListener('click', init);
checkSummaryButton.addEventListener('click', checkSummaryOp);
closeButton.addEventListener('click', closeButtonOp);



