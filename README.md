<div align="center">

# Basic Local MySQL React App

</div>

## Setup [stackoverflow](https://stackoverflow.com/a/50131831)
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

Where `root` as your user `localhost` as your URL and `password` as your password

## [mysqljs](https://github.com/mysqljs/mysql)

### Establishing connections
The recommended way to establish a connection is this:
```js
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
```

However, a connection can also be implicitly established by invoking a query:
```js
const mysql      = require('mysql');
const connection = mysql.createConnection(...);

connection.query('SELECT 1', function (error, results, fields) {
  if (error) throw error;
  // connected!
});
```
