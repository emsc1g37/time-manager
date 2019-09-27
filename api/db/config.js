const pgClient = require('pg');
const errorLogger = require('debug')('error:app');
const debug = require('debug')('logger:dbConfig'); // eslint-disable-line

const pgURI = 'postgresql://postgres:root@localhost:5432/postgres'

const client = new pgClient.Client({
    connectionString: process.env.DATABASE_URL || pgURI
});

function pgConnect() {
    client.connect()
        .then(() => {
            console.log('OK.');
        })
        .catch(e => {
            console.log('helloooo?');
            console.error('KO ---> ' + e)
        });
}

const query = (text, params, cb) => {
    return client.query(text, params, (err, res) => {
        cb(err, res);
    });
};

module.exports = {
    query,
    pgConnect
};
