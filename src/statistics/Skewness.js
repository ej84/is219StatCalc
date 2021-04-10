const Sk = require("compute-skewness");

function Skewness(values) {
    return Sk(values);
}
module.exports = Skewness;