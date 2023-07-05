const mySql = require("mysql");

const connect = mySql.createConnection({
  host: "localhost",
  password: "889516",
  database: "post",
  user: "root",
  port: 3306,
});
//kiểm tra kết nối
connect.connect((err) => {
  if (err) {
    console.log("kết nối thất bại", err);
  } else {
    console.log("conneced");
  }
});
module.exports = connect;