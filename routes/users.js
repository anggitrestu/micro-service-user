const express = require('express');
const router = express.Router();
const handlerUser = require('./handler/users');

/* GET users listing. */
router.post('/register', handlerUser.register);
router.post('/login', handlerUser.login);
router.put('/:id', handlerUser.update);
router.get('/:id', handlerUser.getUser);
router.post('/logout', handlerUser.logout);

module.exports = router;
