const random = require('random')

class randomsFromList{
    generateRandomList(list, n){
        if(!Array.isArray(list)){
            return "ERROR: List parameter is not array"
        }
        else if(list === undefined || list.length === 0){
            return "ERROR: List is empty"
        }
        else if(n > list.length){
            return "ERROR: n is greater then list length"
        }
        let outputList = []
        for(let i = 0; i < n; i++){
            let randomIndex = random.int(0, list.length-1)
            outputList.push(list[randomIndex])
            list.splice(randomIndex, 1)
        }
        return outputList;
    }

}

module.exports = randomsFromList;