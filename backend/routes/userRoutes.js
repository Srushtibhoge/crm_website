const express = require('express');
const { saveUser, getUserById, getUsers, editUsers } = require('../controllers/userController');

const router = express.Router()

router.post('/save-user',saveUser);
router.get('/user/:id',getUserById);
router.get('/users',getUsers);
router.put('/edit-user/:id',editUsers);


module.exports = router;