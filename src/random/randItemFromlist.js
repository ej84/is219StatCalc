const random = require('random')

class randomFromList{
    generateRandomItem(list){
        if(!Array.isArray(list)){
            return "ERROR: List parameter is not array"
        }
        else if(list === undefined || list.length === 0){
            return "ERROR: List is empty"
        }
        return list[random.int(0,list.length-1)]
    }
}
module.exports = randomFromList;