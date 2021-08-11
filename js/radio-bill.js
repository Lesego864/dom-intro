// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const rCallsTotalElement = document.querySelector(".callTotalTwo");
const rSmsTotalElement = document.querySelector(".smsTotalTwo");
const totalCostElement = document.querySelector(".orange");

var radioCallstotal = 0;
var radioSmstotal = 0;
function radioBillTotal() {
    const checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");
    var billItemType = checkedRadioBtn.value;
    if (billItemType == "call") {
        radioCallstotal += 2.75;
    }
    else if (billItemType == "sms") {
        radioSmstotal += 0.75;
    }

    rcallsTotalElem.innerHTML = radioCallstotal.toFixed(2);
    rsmsTotalElem.innerHTML = radioSmstotal.toFixed(2);
    var radiototalCost = radioCallstotal + radioSmstotal;
    var number = radiototalCost.toFixed(2);
    

    if (radiototalCost >= 30 && radiototalCost < 50) {
        rtotalCostElem.classList.add("warning");
    }
    else if (radiototalCost >= 50) {
        rtotalCostElem.classList.add("danger");
        number=50;
    }
    rtotalCostElem.innerHTML = "R" + number;
}

radioTotalAddBtn.addEventListener('click', radioBillTotal);
