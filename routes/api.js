const express = require('express');
const router = express.Router();
const heroesCtrl = require('../controllers/api/heroes');

router.get('/heroes', heroesCtrl.index);
router.get('/heroes/:id', heroesCtrl.show);
router.post('/heroes', heroesCtrl.create);
router.delete('/heroes/:id', heroesCtrl.delete);
router.put('/heroes/:id', heroesCtrl.update);

module.exports = router;