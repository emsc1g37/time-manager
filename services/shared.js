const db = require('../db/config');

function execute(sql, params) {
    return new Promise((resolve, reject) => {
        const query = {
            text: sql,
            values: params
        };
        db.query(query, '', (err, results) => {
            if (err) {
                console.error(err.stack);
                reject({ success: false, error: err });
            } else {
                resolve({ success: true, data: results.rows });
            }
        });
    }).catch(error => {
        console.error('??? -> ' + error);
    });
}

module.exports = {
	execute
};