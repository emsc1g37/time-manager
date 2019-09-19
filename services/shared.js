const db = require("../db/config");

function execute(sql, params) {
  return new Promise((resolve, reject) => {
    const query = {
      text: sql,
      values: params
    };
    db.query(query, "", (err, results) => {
      if (err) {
        console.error(err.stack);
        reject({ error: err });
      } else {
        resolve({ data: results.rows });
      }
    });
  }).catch(error => {
    return error;
  });
}

module.exports = {
  execute
};
