const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const friends = [
    {
      id: 0,
      name: 'KJ',
    },
    {
      id: 1,
      name: 'Another programmer',
    },
    {
      id: 2,
      name: 'Programmer 3',
    }
  ];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Our programmers:</h1>');
    res.write('<ul>');
    for(const coder of friends){
    res.write(`<li>${coder.name}</li>`);
    }
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});