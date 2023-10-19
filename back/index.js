const server = require('./src/app.js');
const { conn } = require('./src/DB_connection.js');

server.listen(3001, () => {
    conn.sync({ force: true });
    console.log("server 3001");
});