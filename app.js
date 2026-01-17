const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

// Sync DB and start server
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server started on http://localhost:3000');
    });
}).catch(err => console.log(err));
