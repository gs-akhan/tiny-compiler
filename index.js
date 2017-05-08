var tokenizer = require("./tokenizer");
var parser = require("./parser");


var code = "(add 1 sub 1 3)";

var tokens = tokenizer(code);

var ast = parser(tokens);


console.log(JSON.stringify(ast));
