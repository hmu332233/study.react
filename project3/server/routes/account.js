import express from 'express';

const router = express.Router();


router.post('/signup', function (req, res) {
  res.json({ success: true });
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