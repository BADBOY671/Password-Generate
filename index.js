var readline = require('readline');
var setTitle = require('console-title');
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


 
rl.setPrompt(`Type: password`);
rl.prompt();

setTitle("Random Password By Badboy");
rl.on('line',async (lol) => {
if(lol.includes('password')){
    let args = lol.split(' ').slice(1).join(' ')
    if(!args) return console.log('Plase Type Password Length')
if(args > 100) return console.log(`You Cant Get Password More 100 Letter`)
if(isNaN(args)) return console.log(`Only Number`)
var generator = require('generate-password');

var password = generator.generate({
	length: args,
	numbers: true
});
console.log(password)
    
}
})
