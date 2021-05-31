/*----- constants -----*/
const valueSlot = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]; 
const multiplierSlot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // How much the value gets multiplied by
const winLoseSlot = ['Won', 'Lost']; // Whether the money gets added on or subtracted from the current total

/*----- app's state (variables) -----*/

let currentTotal = 100;
let selValueSlot;
let selMultiplierSlot;
let selWinLoseSlot;

/*----- cached element references -----*/

let totalTxt = document.querySelector('#totalTxt');
let valueTxt = document.querySelector('#valueTxt');
let multiplierTxt = document.querySelector('#multiplierTxt');
let winLoseTxt = document.querySelector('#winLoseTxt');
let spinButton = document.querySelector('#spin');
let cashOutButton = document.querySelector('#cashOut');

/*----- functions -----*/

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
        console.log('currentTotal: ' + currentTotal); // Checking current total
        console.log('valueSlot: ' + selValueSlot); // Checking whats the value
        console.log('multiplierSlot: ' + selMultiplierSlot); // Checking whats the multiplier
        let value = (selValueSlot * selMultiplierSlot) + currentTotal; // Checking if it's adding and multiplying the correct amount
        return currentTotal = value;
    } else if (selWinLoseSlot === 'Lost') {
        console.log("I Lost")
    };
}



/*----- event listeners -----*/
selValueSlot = valueSlotOp();
selMultiplierSlot = multiplierSlotOp();
selWinLoseSlot = winLoseSlotOp();
winLoseSlotOp();
currentTotalOp();
console.log(currentTotal);