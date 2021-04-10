const Stats = require("stats-lib");

function ZScore(values) {
    return Stats.zScore(values);
}
module.exports = ZScore;