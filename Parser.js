const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';

class Parser {

    str = "";

    constructor(parser) {
        this.parser = parser

    }

    get str() {
        return this.str
    }
    

    parse(phrase) {
        this.str = phrase
            .split(`${this.parser}`)
            .filter(Number)
            .map(w => w.trim())
            .join(' ')
    }
}

const p = new Parser(':');
p.parse(phrase);
console.log(p.str);