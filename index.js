const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//listen for port provided by heroku or default to 5000 in development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
