class Calculation {

    #result = "";
    constructor(n1, n2, op, n3 = null) {

        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.op = op;
        this.#result = this.op(n1, n2, n3);

    }

    GetResult() {

        return this.#result;

    }


}

module.exports = Calculation;