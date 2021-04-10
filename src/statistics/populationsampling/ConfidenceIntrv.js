const jst = require('jstat');

function Mean(elements){
    let sum = 0;
    elements.forEach(function (number){
        sum += number;
    })
    return sum/elements.length;
}

function ConfidenceIntrv(elements, confidencePercentile){
    let mean = Mean(elements);
    return jst.normalci(mean, 1-confidencePercentile, elements);
}

module.exports = ConfidenceIntrv;