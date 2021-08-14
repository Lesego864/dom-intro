// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const addbtnSettings = document.querySelector(".radioaddSettings");
const settingUpdate = document.querySelector(".updateSettings");
const settingCalltotalElement = document.querySelector(".callTotalSettings");
const settingSmstotallElement = document.querySelector(".smsTotalSettings");
const settingTotalElement = document.querySelector(".final");
const costperCallElement = document.querySelector(".callCostSetting");
const costperSmsElement = document.querySelector(".smsCostSetting");
const warningValuElement = document.querySelector(".warningLevelSetting");
const dangerValueElement = document.querySelector(".criticalLevelSetting");

var settingCalltotal = 0;
var settingSmstotal = 0;
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var dangerLevel = 0;

function costUpdate() {
    var costperCall = parseFloat(costperCallElement.value);
    if (costperCall != 0) {
        callCost = costperCall;
        settingCalltotal = 0;
    }
    var costperSms = parseFloat(costperSmsElement.value);
    if (costperSms != 0) {
        smsCost = costperSms;
        settingSmstotal = 0;
    }

    var warningValue = parseFloat(warningValuElement.value);
    if (warningValue != callCost - smsCost) {
        warningLevel = warningValue;
    }
    var dangerValue = parseFloat(dangerValueElement.value);
    if (dangerValue != callCost - smsCost) {
        dangerLevel = dangerValue;
    }

}

settingUpdate.addEventListener('click', costUpdate)

function settingsBill() {

    const checkedRadioBtnSettings = document.querySelector(".billItemTypeWithSettings:checked");
    var inputItem = checkedRadioBtnSettings.value;
    if (inputItem == "call") {
        settingCalltotal += callCost;
    }
    else if (inputItem == "sms") {
        settingSmstotal += smsCost;
    }
    settingCalltotalElement.innerHTML = settingCalltotal.toFixed(2);
    settingSmstotallElement.innerHTML = settingSmstotal.toFixed(2);
    var settingTotal = settingCalltotal + settingSmstotal;
    var number = settingTotal.toFixed(2);
    
    if (settingTotal >= warningLevel && settingTotal < dangerLevel) {
        settingTotalElement.classList.add("warning");
    }
    else if (settingTotal >= dangerLevel) {
        settingTotalElement.classList.add("danger");
        number = dangerLevel;
    }
    settingTotalElement.innerHTML ="R"+ number;
}
addbtnSettings.addEventListener('click', settingsBill);
