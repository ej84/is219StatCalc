const simpleRandom = require('../random/');
const systematic = require('./populationsampling/SystematicSample');
const confidenceInterval = require('./populationsampling/SimpRandomSamp');
const marginError = require('./populationsampling/MarginError');
const cochran = require('./populationsampling/Cochran');
const sampleSizeCI = require('./populationsampling/SampleSizeCi');

class PopulationSamplingOperations{
    static SimpleRandom(elements,amount){
        if (!Array.isArray(elements)){
            throw new Error('must be an Array');
        }
        else if (elements.length===0){
            throw new Error('cannot be empty');
        }
        return simpleRandom(elements,amount);
    }

    static Systematic(elements,amount){
        if (!Array.isArray(elements)){
            throw new Error('must be an Array');
        }
        else if (elements.length===0){
            throw new Error('cannot be empty');
        }
        return systematic(elements, amount);
    }

    static ConfidenceInterval(elements, confidencePercentile){
        if (!Array.isArray(elements)){
            throw new Error('must be an Array');
        }
        else if (elements.length===0){
            throw new Error('cannot be empty');
        }
        return confidenceInterval(elements, confidencePercentile);
    }

    static MarginError(elements, confidencePercentile){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty');
        }
        return marginError(elements, confidencePercentile);
    }

    static Cochran(precision, confidencePercent, proportion){
        return cochran(precision, confidencePercent, proportion);
    }

    static SampleSizeCI(confidencePercentile, width, popStdDev = null){
        return sampleSizeCI(confidencePercentile, width, popStdDev);
    }
}

module.exports = PopulationSamplingOperations;