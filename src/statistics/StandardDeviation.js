const Math = require("mathjs");

function StandardDeviation(values) {
    return Math.sqrt(Math.variance(values));
}
module.exports = StandardDeviation;