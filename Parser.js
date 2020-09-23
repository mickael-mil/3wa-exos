const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';

class Parser {


    constructor(parser) {
        this.parser = parser
        this._str = ""
    }

    get str() {
        return this._str
    }
    

    parse(phrase) {
        this._str = phrase
            .split(this.parser)
            .filter(Number)
            .map(w => w.trim())
            .join(' ')
    }
}

const p = new Parser(':');
p.parse(phrase);
console.log(p.str);