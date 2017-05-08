function parser(tokens) {
    var current = 0;
    function walk() {
        var token = tokens[current];

        if (token.type === "paren" && token.value === "(") {
            //Skip the open paren
            current++;

            var node = {
                type: "CallExpression",
                name: tokens[current].value,
                params: []
            };

            current++;
            token = tokens[current];

            while (
                token.type !== "paren" || token.value !== ")"
            ) {
                node.params.push(walk());
                token = tokens[current];
            }
            
            current++;
            return node;

        }

        if (token.type === "number") {
            current++;
            return {
                type: "NumberLiteral",
                value: token.value
            }
        }
        if (token.type === 'string') {
            current++;

            return {
                type: 'StringLiteral',
                value: token.value,
            };
        }
        throw Error("I dont know what token is this " + token.type + token.value);


    }

    var ast = {
        type: 'Program',
        body: []
    };
    while (current < tokens.length) {
        console.log("hw")
        ast.body.push(walk());
    }

    return ast;
}


module.exports = parser;



