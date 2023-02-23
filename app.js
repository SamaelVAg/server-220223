const express = require('express');
const morgan = require('morgan');
const usersRoutes = require('./routes/users.routes');

const app = express();
const port = 8000;

app.use(morgan('tiny'));
app.use(express.json());

app.use(usersRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})