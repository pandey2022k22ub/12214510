const app = require('./app');

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running amazingly on http://localhost:${PORT}`);
});
