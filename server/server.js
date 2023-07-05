const express = require("express");
const server = express();
const useRoute= require("./routes/user.routes")
const port = 8000;

const database = require("./connection/connectMySQL");

server.use('/api/v1/users', useRoute);


server.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
