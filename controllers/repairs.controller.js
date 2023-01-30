exports.findRepairs = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE  - GET DESDE EL CONTROLADOR',
  });
};

exports.createRepairs = (req, res) => {
  const { id, date, status, userId } = req.body;

  res.json({
    status: 'success',
    message: 'ROUTE  -  POST DESDE CONTROLADOR',
    repairs: {
      id,
      date,
      status,
      userId,
    },
  });
};

exports.updateRepairs = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE  -  PATCH DESDE CONTROLADOR',
  });
};

exports.deleteRepairs = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE  -  DELETE DESDE CONTROLADOR',
  });
};
