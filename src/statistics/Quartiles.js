const Stats = require('stats-lib');

function Quartiles(values) {

    return Stats.quartile(values);

}
module.exports = Quartiles;