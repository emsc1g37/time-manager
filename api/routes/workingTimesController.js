const workingTimesService = require("../services/workingTimesService");

async function clockInAndOut(req, res) {
  const result = await workingTimesService.getLastFor(req.user.id);
  if (result.error)
    res.status(500).json(result).end();
  else if (result.data.length == 0 || result.data[0].departure !== undefined) {
    if (isToday(result.data[0].departure))
      res.status(400).json({error: "You can only clock in once per day."}).end();
    else {
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

async function getAllBetween(req, res) {
  const result = await workingTimesService.getAllBetween(req.params.userId,
    new Date(req.query.from),
    new Date(new Date().setDate(new Date(req.query.to).getDate() + 1))
  );
  if (result.error)
    res.status(500).json(result).end();
  else
    res.json(result.data);
}

const isToday = (someDate) => {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}

module.exports = {
  clockInAndOut,
  getAllBetween
};