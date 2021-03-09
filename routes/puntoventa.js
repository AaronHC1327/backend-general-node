const { Router } = require('express');

const { pvGet, pvPost, pvPut, pvDel } = require('../controllers/puntoventa');

const router = Router();

router.get('/', pvGet)
router.post('/', pvPost)
router.put('/:id', pvPut)
router.delete('/', pvDel)

module.exports = router;