const Math = require('mathjs');

function Mode(values) {
    return Math.mode(values);
}
module.exports = Mode;