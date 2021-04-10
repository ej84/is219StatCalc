const randomNumber = require('./random/randomNums');
const randomNumberSeed = require('./random/randomNumSeed')
const randomListNum = require('./random/randListofNum')
const randomItemFromList = require('./random/randItemFromlist')
const randomItemFromListSeed = require('./random/randItemFromlistSeed')
const randomItemsFromListSeed = require('./random/randomItemsFromlistSeed')
const randomItemsFromList = require('./random/randItemsFromlist')

class RandomGenerator{
    // Random number Generating Functions
    randomInt(min, max){
        let rndGen = new randomNumber();
        return rndGen.randomInt(min, max);
    }

    randomFloat(min, max){
        let rndGen = new randomNumber();
        return rndGen.randomFloat(min, max);
    }

    // Random Functions with seed or no seeds

    randomInt(min, max, seed){
        let rndGen = new randomNumberSeed()
        return rndGen.randomInt(min, max, seed);
    }

    randomFloat(min, max, seed){
        let rndGen = new randomNumberSeed()
        return rndGen.randomFloat(min, max, seed);
    }


    randomIntList(min, max, n, seed){
        let rndGen = new randomListNum();
        return rndGen.generateIntList(min, max, n, seed);
    }

    randomFloatList(min, max, n , seed){
        let rndGen = new randomListNum();
        return rndGen.generateFloatList(min, max, n, seed);
    }

    //Select a random item from a list
    randomItemFromList(list){
        let rndGen = new randomItemFromList();
        return rndGen.generateRandomItem(list);
    }


    randomItemFromList(list, seed){
        let rndGen = new randomItemFromListSeed();
        return rndGen.generateRandomItem(list, seed);
    }


    randomItemsFromList(list, n){
        let rndGen = new randomItemsFromList();
        return rndGen.generateRandomList(list, n);
    }

    randomItemsFromList(list, n, seed){
        let rndGen = new randomItemsFromListSeed();
        return rndGen.generateRandomList(list, n, seed);
    }
}

module.exports = RandomGenerator