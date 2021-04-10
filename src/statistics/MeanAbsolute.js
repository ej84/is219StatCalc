const Subtract = require('../operations/Substract');
const Math = require('mathjs');

function MeanAbsoluteDev(values) {

    let mean = Math.mean(values);
    return Math.mean(values.map(function (n){
        return Math.abs(Subtract(n, mean));
    }));

}

module.exports = MeanAbsoluteDev;