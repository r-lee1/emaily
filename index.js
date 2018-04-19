const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//listen for port provided by heroku or default to 5000 in development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
