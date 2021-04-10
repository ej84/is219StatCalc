
const random = require('random')
const seedRandom = require('seedrandom')

class RandomListOfNum{
    constructor() {
        self.array = []
    }

    generateIntList(min, max, n, seed){
        random.use(seedRandom(seed))
        for(let i = 0; i <= n; i++){
            self.array.push(random.int(min, max));
        }
        return self.array;
    }

    generateFloatList(min, max, n, seed){
        random.use(seedRandom(seed))
        for(let i = 0; i <= n; i++){
            self.array.push(random.float(min, max));
        }
        return self.array;
    }

}
module.exports = RandomListOfNum;