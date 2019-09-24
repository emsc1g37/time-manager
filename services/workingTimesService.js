const shared = require("./shared");

function clockIn(userId) {
  return shared.execute("INSERT INTO working_times (user_id) VALUES ($1) RETURNING id, arrival",
    [userId]
  );
}

function clockOut(userId) {
  return shared.execute("UPDATE working_times set departure = LOCALTIMESTAMP() WHERE user_id = $1 AND id = (SELECT max(id) FROM working_times) RETURNING id, arrival, departure",
    [userId]
  );
}

function getAllBetween(userId, from, to) {
  return shared.execute("SELECT * FROM working_times WHERE user_id = $1 AND arrival >= $1 AND departure <= $3",
    [userId, from, to]
  );
}

function getLastFor(userId) {
  return shared.execute("SELECT * FROM working_times WHERE user_id = $1 ORDER BY id DESC LIMIT 1",
    [userId]
  );
}

module.exports = {
  clockIn,
  clockOut,
  getAllBetween,
  getLastFor
};