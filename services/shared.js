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
        reject({ status: 500, success: false, error: err });
      } else {
        resolve({ status: 200, success: true, data: results.rows });
      }
    });
  }).catch(error => {
    return error;
  });
}

module.exports = {
  execute
};
