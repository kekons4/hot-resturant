const express = require('express');
const path = require('path');
const router = require('./routes/routes');

// Assigning express() to a variable to streamline code
const app = express();
const port = process.env.port || 6101;

// Data parsing/handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

// Starts express server listener
app.listen(port, () => console.log(`App listening on PORT ${port}`));

