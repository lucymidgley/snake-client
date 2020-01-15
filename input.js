const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
  
const handleUserInput = function(){
    stdin.on('data', (key) => {if (key === '\u0003') {
      process.exit();
    }
    });
  }

const setupInput = function() {
  
  stdin.resume();
 
  handleUserInput();
  return stdin;
}

module.exports = setupInput;