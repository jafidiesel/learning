

function getConfig() {
    return[
        true,
        10,
        11,
        12
    ]
}

// array matching
const [isOn, amount, ...rest] = getConfig();
isOn;
amount;
rest;

var globalIsOn = false;
var globalamount = 10;
function setConfig([_isOn, _amount]){
    globalIsOn = _isOn;
    globalamount = _amount;
}

setConfig([
    true,
    20
])

globalIsOn
globalamount