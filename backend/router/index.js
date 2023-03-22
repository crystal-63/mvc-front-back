const { Router } = require('express');
const bodyParser = require('body-parser');
const listController = require('../controllers/list');
const detailController = require('../controllers/detail');

const router = new Router();
const jsonParser = bodyParser.json();

router.get('/list', listController.view);
router.get('/detail/:id',detailController.view);
router.post('/list/remove_mobile', jsonParser, listController.removeMobile);
router.post('/list/add_mobile', jsonParser, listController.addMobile)

module.exports = router;