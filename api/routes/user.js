const express = require('express');
const router = express.Router();

const UserController = require("../controllers/users");
const checkAuth = require('../middleware/check-auth');
// sign up and sign in
router.post("/signup", UserController.users_signup_user);

router.post('/login', UserController.users_login_user);

router.delete('/:userId', checkAuth, UserController.users_delete_user);

module.exports = router;