module.exports = function SystematicSample(elements, amount){
    let result = [];

    if(amount>elements.length){
        amount = elements.length;
    }
    let interval = Math.floor(elements.length/amount);

    for (let i = 0; i < elements.length; i = i + interval){
        if(result.length === amount){
            continue;
        }
        result.push(elements[i]);
    }
    return result;
};