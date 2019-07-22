import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'armenia33',
  database: 'booking',
});

module.exports = connection;
