const express = require('express');
const router = express.Router();

const User = require('../models/User');
const UserRepository = require('../repositories/UserRepository');
const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
