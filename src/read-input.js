
// Since we're doing everything from the console and not on the front end via a web browser,
// you're going to need a bit of extra overhead to read user input from the console. 
// https://nodejs.org/api/readline.html

// First we require an outisde library then create an interface for reading user input.
var readline = require('readline');
var rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("What do you think of node.js? ", function(answer) {
  
  // After reading user input, the value is saved into the variable named "answer".
  // From here until the closing curly brace, you may manipulate answer in any way you choose.
  // In this case, we'll simply print it out.
  // The next line prints anwser to the log.
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});
