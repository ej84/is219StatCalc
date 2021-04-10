const seedRandom = require('seedrandom')
const random = require("random");

class randomNumberBySeed{
    randomInt(min, max, seed){
        random.use(seedRandom(seed))
        return random.int(min, max)
    }

    randomFloat(min, max, seed){
        random.use(seedRandom(seed))
        return random.float(min, max)
    }

}
module.exports = randomNumberBySeed;