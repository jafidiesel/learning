// object matching

var config = {};

function getConfig() {
  return {
    isOn: true,
    amount: 10
  };
}


function setConfig({ isOn, amount }) {
    config = {
        isOn,
        amount
    };
}

// deep object matching
function getAnotherConfig(){
    return {
        isOn: true,
        amount: 10, 
        servers: {
            a: true,
            b: 123
        }
    }

}


var { isOn, amount } = getConfig();

isOn;
amount;

setConfig({ isOn: false, amount: 20});

config;

// deep object matching: use

var {
    isOn: mySpecialIsOnBool,
    amount: restartTimeout,
    servers: {
        b: serverB
    }
} = getAnotherConfig();

mySpecialIsOnBool;
restartTimeout;
serverB;