const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', auth, userController.getAllUsers);
router.get('/users/:id', auth, userController.getUserById);

module.exports = router;
