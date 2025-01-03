let score = "33"
let strScore = "33abc"


let numvar = Number(score);

console.log(`Score type ${typeof(score)} after conversion it is ${typeof(numvar)}`)

let changestrScore = Number(strScore)
console.log(`Score type ${typeof(strScore)} and value is ${strScore} but after conversion it is ${typeof(changestrScore)} and value is ${changestrScore}`)

/*
 Point is any string can be converted to Number But the some cases the value of that variable will be NaN(Not a number)
*/

let Isloggedin = 1;
let booleanLoggedIn = Boolean(Isloggedin);
console.log(booleanLoggedIn);

/*
 1=>true  0=>false
 ""=>false   "Rabin"=>true
*/