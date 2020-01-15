let connection;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

  
const handleUserInput = function(){
    stdin.on('data', (key) => {if (key === '\u0003') {
      process.exit();
    }
    else if (key === 'w') {
      connection.write("Move: up");
    }
    else if (key === 'a') {
      connection.write("Move: left");
    }
    else if (key === 's') {
      connection.write("Move: down");
    }
    else if (key === 'd') {
      connection.write("Move: right");
    }
    });
    
  }

const setupInput = function(conn) {
  connection = conn;
  
  stdin.resume();
 
  handleUserInput();
  return stdin;
}



module.exports = setupInput;