const Rand = require('random')

function SimpRandomSamp(elements, amount){
    let remainingElements = [...elements];
    let result = [];
    if(amount>elements.length){
        amount = elements.length;
    }
    for (let i = 0; i < amount; i++){
        let chosenIndex = Rand.int(0,remainingElements.length-1);
        result.push(remainingElements[chosenIndex]);
        remainingElements.splice(chosenIndex, 1);
    }
    return result;
};

module.exports = SimpRandomSamp;