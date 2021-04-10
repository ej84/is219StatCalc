const random = require('random')

class randomNumber{

    randomInt(min, max){
        //if type of min & max is not int
        return random.int(min, max);
    }

    randomFloat(min, max){
        //if type of min & max is not float
        return random.float(min, max);
    }

}
module.exports = randomNumber