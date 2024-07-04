const express = require('express');
const cors = require('cors');
const wordRoutes = require('./routes/route');

const app = express();
const PORT = 2010;

app.use(cors());
app.use(express.json());

app.use(wordRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
