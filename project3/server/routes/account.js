import express from 'express';
import Account from '../models/account';

const router = express.Router();

/*
    ACCOUNT SIGNUP: POST /api/account/signup
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: BAD USERNAME
        2: BAD PASSWORD
        3: USERNAM EXISTS
*/
router.post('/signup', function (req, res) {
  let usernameRegex = /^[a-z0-9]+$/;
  
  // CHECK USERNAME FORMAT
  if (!usernameRegex.test(req.body.username)) {
    return res.status(400).json({
      error: 'BAD USERNAME',
      code: 1
    });
  }
  
  // CHECK PASSWORD LENGTH
  if (req.body.password.length < 4 || typeof req.body.password !== "string") {
    return status(400).json({
      error: 'BAD PASSWORD',
      code: 2
    });
  }
  
  // CHECK USER EXISTANCE
  Account.findOne({ username: req.body.username }, function (err, user) {
    if (err) throw err;
    if (user) {
      return res.status(409).json({
        error: 'USERNAME EXISTS',
        code: 3
      });
    }
  });
  
  // CREATE ACCOUNT
  let account = new Account({
    username: req.body.username,
    password: req.body.password
  });
  
  account.password = account.generateHash(account.password);
  
  // SAVE IN THE DATABASE
  account.save(function (err) {
    if (err) throw err;
    return res.json({ success: true });
  });
});

router.post('/signin', function (req, res) {
  res.json({ success: true });
});

router.get('/getinfo', function (req, res) {
  res.json({ success: true });
});

router.post('/logout', function (req, res) {
  res.json({ success: true });
});

export default router;