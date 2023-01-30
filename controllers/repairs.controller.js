exports.findRepairs = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE  - GET DESDE EL CONTROLADOR',
  });
};

exports.createRepairs = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE  -  POST DESDE CONTROLADOR',
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
