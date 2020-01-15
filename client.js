const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  })
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to the server!');
    conn.write("Name: LM" )
});
// conn.on('connect', () => {setTimeout(() => { 
//   conn.write("Move: up" );
// }, 1000);
//   });
//   conn.on('connect', () => {setTimeout(() => { 
//     conn.write("Move: left" );
//   }, 2000);
//     });
//     conn.on('connect', () => {setTimeout(() => {
//       setInterval(() => { 
//       conn.write("Move: left" );
//     }, 100); 
//     }, 2500);
//       });
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}


module.exports = connect;