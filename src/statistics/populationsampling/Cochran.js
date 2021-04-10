const jstat = require('jstat');

function Cochran(precision, confidencePercentile, proportion){
    let zScore = -jstat.normal.inv((1-confidencePercentile)/2, 0, 1);
    return (Math.pow(zScore,2)*proportion*(1-proportion))/Math.pow(precision, 2);
}

module.exports = Cochran;