const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'hieu123456',
  database: 'running_event'
});

connection.connect(err => {
  if (err) {
    console.error('Lỗi kết nối đến cơ sở dữ liệu:', err);
  } else {
    console.log('Kết nối thành công đến cơ sở dữ liệu MySQL');
  }
});

module.exports = connection;