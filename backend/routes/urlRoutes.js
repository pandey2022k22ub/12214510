const express = require('express');
const {
  shortenUrl,
  redirectUrl,
  getAllUrls
} = require('../controllers/urlController');

const router = express.Router();
router.post('/api/shorten', shortenUrl);
router.get('/api/urls', getAllUrls);
router.get('/:code', redirectUrl);

module.exports = router;
