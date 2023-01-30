const { Router } = require('express');
const {
  findRepairs,
  createRepairs,
  deleteRepairs,
  updateRepairs,
} = require('../controllers/repairs.controller');

const router = Router();

router.get('/', findRepairs);

router.post('/', createRepairs);

router.put('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE  -  PUT',
  });
});

router.patch('/', updateRepairs);

router.delete('/', deleteRepairs);

module.exports = {
  repairsRouter: router,
};
