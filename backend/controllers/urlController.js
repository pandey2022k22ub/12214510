const { generateCode } = require('../utils/generateCode');

let urls = []; 

function shortenUrl(req, res) {
  try {
    const { longUrl, validity, customCode } = req.body;
if (!longUrl) {
      return res.status(400).json({ message: 'Long URL is required' });
  }
let code = customCode || generateCode();
const exists = urls.find(u => u.code === code);
    if (exists) {
      return res.status(409).json({ message: 'Shortcode already exists' });
    }

    const now = Date.now();
    const expiresAt = now + ((validity || 30) * 60 * 1000); 
  const newUrl = {
      code,
      longUrl,
      createdAt: now,
      expiresAt,
      clicks: 0
    };

    urls.push(newUrl);
    res.status(201).json({ shortUrl: `http://localhost:5000/${code}` });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong! error occured, resolve it.' });
  }
}

function redirectUrl(req, res) {
  try {
    const code = req.params.code;
    const now = Date.now();

    const item = urls.find(u => u.code === code);

    if (!item) {
      return res.status(404).json({ message: 'Unable to shorten url.' });
    }

    if (item.expiresAt < now) {
      return res.status(410).json({ message: 'Link has been expired' });
    }

    item.clicks += 1;
    res.redirect(item.longUrl);
  } catch (err) {
    res.status(500).json({ message: 'Error in redirection' });
  }
}

function getAllUrls(req, res) {
  try {
    res.status(200).json(urls);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get URLs' });
  }
}

module.exports = { shortenUrl, redirectUrl, getAllUrls };
