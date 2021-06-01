/*----- constants -----*/
const valueSlot = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]; 
const multiplierSlot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // How much the value gets multiplied by
const winLoseSlot = ['Won', 'Lost']; // Whether the money gets added on or subtracted from the current total

/*----- app's state (variables) -----*/

let currentTotal = 100; // 100 is just to test
let selValueSlot;
let selMultiplierSlot;
let selWinLoseSlot;

/*----- cached element references -----*/

let totalTxt = document.querySelector('#totalTxt');
let valueTxt = document.querySelector('#valueTxt');
let multiplierTxt = document.querySelector('#multiplierTxt');
let winLoseTxt = document.querySelector('#winLoseTxt');
let inputValue = document.querySelector('input');
let inputButton = document.querySelector('#inputButton')
let spinButton = document.querySelector('#spin');
let cashOutButton = document.querySelector('#cashOut');

/*----- functions -----*/

function init() {
    currentTotal = 100; // 100 is just to test
    selValueSlot = 0 // Testing
    selMultiplierSlot = 0 // Testing
    selWinLoseSlot = ''; // Testing
}

function userInput() { // When the user adds in an input and click the submit button, this function should update the value of currentValue
    let total = inputValue.value;
    return total
}

function valueSlotOp() {
    let value = valueSlot[Math.floor(Math.random() * valueSlot.length)]; // finds a random number from the array
    selValueSlot = value;
    return selValueSlot;
}

function multiplierSlotOp() {
    let value = multiplierSlot[Math.floor(Math.random() * multiplierSlot.length)]; // finds a random multiplier from the array
    selMultiplierSlot = value;
    return selMultiplierSlot;
}

function winLoseSlotOp() {
    let value = winLoseSlot[Math.floor(Math.random() * winLoseSlot.length)]; // randomly finds if they win or lose the money
    let selWinLoseSlot = value;
    return selWinLoseSlot;
}

function currentTotalOp() {
    if (selWinLoseSlot === 'Won') {
        let value = (selValueSlot * selMultiplierSlot) + currentTotal; // Checking if it's adding and multiplying the correct amount
        return currentTotal = value;
    } else if (selWinLoseSlot === 'Lost') {
        let value = currentTotal - (selValueSlot * selMultiplierSlot); // Checking if it's adding and multiplying the correct amount
        return currentTotal = value;
    };
}

function txtChange() {
    totalTxt.innerText = '$' + currentTotal + '.00';
    valueTxt.innerText = '$' + selValueSlot;
    multiplierTxt.innerText = 'x' + selMultiplierSlot;
    winLoseTxt.innerText = selWinLoseSlot;
}

function spinIt() {
    valueSlotOp();
    multiplierSlotOp();
    winLoseSlotOp();
    console.log(valueSlotOp())
}



/*----- event listeners -----*/
spinIt();
currentTotal = userInput();

/*selValueSlot = valueSlotOp();
selMultiplierSlot = multiplierSlotOp();
selWinLoseSlot = winLoseSlotOp();
winLoseSlotOp();
currentTotalOp();
console.log(currentTotal);
txtChange();*/

inputButton.addEventListener('click', userInput);
spinButton.addEventListener('click', spinIt)

