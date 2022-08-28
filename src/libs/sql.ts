import mysql from 'mysql';

const connect = mysql.createConnection({
    host: 'HOSTNAME',
    user: 'USERNAME',
    password: 'PASSWORD',
    port: 3306,
    database: 'NAME DATABASE'
});

connect.connect();

export default {
    connect,
    mysql
}
