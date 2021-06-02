
/*----- constants -----*/
const valueSlot = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]; 
const multiplierSlot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // How much the value gets multiplied by
const winLoseSlot = ['Won', 'Lost']; // Whether the money gets added on or subtracted from the current total

/*----- app's state (variables) -----*/

let currentTotal = 0;
let selValueSlot = 0;
let selMultiplierSlot = 0;
let selWinLoseSlot = '';

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
    currentTotal = 0;
    selValueSlot = 0;
    selMultiplierSlot = 0;
    selWinLoseSlot = 'Won'; 
    render();
}

function userInput() { // When the user adds in an input and click the submit button, this function should update the value of currentValue
    let total = inputValue.value;
    currentTotal = total; // Should + currentValue but it would add another 0;
    render();
    return currentTotal;
}

function valueSlotOp() {
    let value = valueSlot[Math.floor(Math.random() * valueSlot.length)]; // finds a random number from the array
    selValueSlot = value
    render();
    return selValueSlot;
}

function multiplierSlotOp() {
    let value = multiplierSlot[Math.floor(Math.random() * multiplierSlot.length)]; // finds a random multiplier from the array
    selMultiplierSlot = value;
    render();
    return selMultiplierSlot;
}

function winLoseSlotOp() {
    let value = winLoseSlot[Math.floor(Math.random() * winLoseSlot.length)]; // randomly finds if they win or lose the money
    let selWinLoseSlot = value;
    render();
    return selWinLoseSlot;
}

function currentTotalOp() {
    if (selWinLoseSlot === 'Won') {
        let value = (selValueSlot * selMultiplierSlot) + currentTotal; // Checking if it's adding and multiplying the correct amount
        render();
        return currentTotal = value;
    } else if (selWinLoseSlot === 'Lost') {
        let value = currentTotal - (selValueSlot * selMultiplierSlot); // Checking if it's adding and multiplying the correct amount
        render();
        return currentTotal = value;
    };
}





function spinner() { // focused here render and init
    valueSlotOp();
    selValueSlot = valueSlotOp();
    console.log('value: ' + selValueSlot);
    multiplierSlotOp();
    selMultiplierSlot = multiplierSlotOp();
    console.log('multiplier: ' + selMultiplierSlot);
    winLoseSlotOp();
    selWinLoseSlot = winLoseSlotOp();
    console.log('winLose: ' + selWinLoseSlot);
    console.log('totalbefore: ' + currentTotal);
    currentTotalOp()
    currentTotal = currentTotalOp();
    console.log('total: ' + currentTotal);
}


function render() {
    totalTxt.innerText = '$' + currentTotal + '.00';
    valueTxt.innerText = '$' + selValueSlot;
    multiplierTxt.innerText = 'x' + selMultiplierSlot;
    winLoseTxt.innerText = selWinLoseSlot;
}

// init is just initialising
// render is just doing the logic and displaying what needs to changed

/*----- event listeners -----*/


init();

inputButton.addEventListener('click', userInput);
console.log(currentTotal)
spinButton.addEventListener('click', spinner);
cashOutButton.addEventListener('click', init);

console.log(currentTotal)



