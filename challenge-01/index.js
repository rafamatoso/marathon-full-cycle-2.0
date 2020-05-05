var http = require("http");
const msg = "Maratona Full Cycle 2.0";
var server = http.createServer((req, res) => {
  res.end(msg);
});
console.log(msg);
server.listen(3000);
