const Calculator = require("./Calculator");
const Calculation = require('./model/Calculation');
const PopSampOps = require('./statistics/PopulationSampling');

class ScientificCalc extends Calculator{
    Cochran(precision, confidencePercentile, proportion){
        this.AddCalculation(new Calculation(precision, confidencePercentile, PopSampOps.Cochran,proportion));
        return this.GetLastCalculation();
    }
    ConfidenceInterval(elements, confidencePercentile){
        this.AddCalculation(new Calculation(elements, confidencePercentile, PopSampOps.ConfidenceInterval));
        return this.GetLastCalculation();
    }
    MarginError(elements, confidencePercentile){
        this.AddCalculation(new Calculation(elements, confidencePercentile, PopSampOps.MarginError));
        return this.GetLastCalculation();
    }
    SampleSizeCI(confidencePercentile, width, popStdDev = null){
        this.AddCalculation(new Calculation(confidencePercentile, width, PopSampOps.SampleSizeCI, popStdDev));
        return this.GetLastCalculation();
    }
    SimpleRandom(elements, amount){
        this.AddCalculation(new Calculation(elements, amount, PopSampOps.SimpleRandom));
        return this.GetLastCalculation();
    }
    SystematicSample(elements, amount){
        this.AddCalculation(new Calculation(elements, amount, PopSampOps.Systematic));
        return this.GetLastCalculation();
    }
    Copy(){
        let newCalc = new ScientificCalc();
        newCalc.Calculations = this.Calculations;
        return newCalc;
    }
}
module.exports = ScientificCalc;