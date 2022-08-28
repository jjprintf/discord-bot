import mysql from 'mysql';

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Printf17',
    port: 3306,
    database: 'Kazu'
});

connect.connect();

export default {
    connect,
    mysql
}
