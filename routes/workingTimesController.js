const workingTimesService = require("../services/workingTimesService");

async function clockInAndOut(req, res) {
  const result = await workingTimesService.getLastClockFor(req.user.id);
  if (result.error)
    res.status(500).json(result).end();
  else if (result.data.length == 0 || result.data[0].departure == null) {
    const result = await workingTimesService.clockIn(req.user.id);
    if (result.error)
      res.status(500).json(result).end();
    else
      res.status(201).json({
        user_id: req.user.id,
        id: result.data[0].id,
        arrival: result.data[0].arrival
      }).end();
  }
  else {
    const result = await workingTimesService.clockOut(req.user.id);
    if (result.error)
      res.status(500).json(result).end();
    else
      res.json({
        user_id: req.user.id,
        id: result.data[0].id,
        arrival: result.data[0].arrival,
        departure: result.data[0].departure
      }).end();
  }
}

module.exports = {
  clockInAndOut
};