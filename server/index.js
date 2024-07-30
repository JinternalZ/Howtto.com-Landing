// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const sendMessageRoute = require('./api/send-message');

const app = express();
app.use(bodyParser.json());
app.use('/api', sendMessageRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});