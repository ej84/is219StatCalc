const jstat = require('jstat');

function SampleSizeCi(confidencePercentile, width, popStdDev = null){
    let zScore = -jstat.normal.inv((1-confidencePercentile)/2, 0, 1);
    let result;
    if(popStdDev!==null){
        result = zScore * popStdDev;
        result = result/(width/2);
        result = Math.pow(result,2);
    }
    else{
        let e = width/2;
        let p = 0.5;
        let q = 1-p;
        let pq = p*q;
        result = zScore/e;
        result = Math.pow(result,2);
        result = result * pq;
    }

    return result;
};

module.exports = SampleSizeCi;