const random = require('random')
const seedRandom = require('seedrandom')

class randomFromList{
    generateRandomItem(list, seed){
        if(!Array.isArray(list)){
            return "ERROR: List parameter is not array"
        }
        else if(list === undefined || list.length === 0){
            return "ERROR: List is empty"
        }
        random.use(seedRandom(seed))
        return list[random.int(0,list.length-1)]
    }
}
module.exports = randomFromList;