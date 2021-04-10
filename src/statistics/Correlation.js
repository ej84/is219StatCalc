const Stats = require('stats-lib');

function Correlation(val1, val2) {
    return Stats.corr(val1, val2);
}

module.exports = Correlation;