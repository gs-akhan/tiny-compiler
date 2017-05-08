function tokenizer(input) {
    var current = 0;
    var tokens = [];
    while (current < input.length) {
        let char = input[current];

        if (char === "(") {
            tokens.push({
                type: "paren",
                value: "("
            });

            current++;
            continue;
        }

        if (char === ")") {
            tokens.push({
                type: "paren",
                value: ")"
            });

            current++;
            continue;
        }

        let SPACE = /\s/;

        if (SPACE.test(char)) {
            current++;
            continue
        }


        let LETTERS = /[a-z]/i;
        
        if (LETTERS.test(char)) {
            let name = "";
            while (LETTERS.test(char)) {
                name += char;
                char = input[++current];
            }
            tokens.push({
                type: "string",
                value: name
            });
            continue;
        }


        let NUMBERS = /[0-9]/;

        if(NUMBERS.test(char)) {
            let num = "";
            while(NUMBERS.test(char)) {
                num += char;
                char = input[++current];
            }
            tokens.push({
                type : "number",
                value : num
            });

            continue;
        }

         throw new TypeError('Sorry, I dont know what this is : '+ input[current]);
    }

    return tokens;

}

module.exports = tokenizer;