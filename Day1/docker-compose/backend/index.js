const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const todosRouter = require('./routes/todos');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.use('/api', todosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
