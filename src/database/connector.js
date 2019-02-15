const Database = require('./mongodb');
const username = process.env.username;
const password = process.env.password;
const connectionstring = `mongodb://${username}:${password}@ds137605.mlab.com:37605/hackatonaubgdb`;
const database = new Database(connectionstring);

module.exports = database;