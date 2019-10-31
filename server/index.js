require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const mainCtrl = require('./controller/mainController');
const newDogCtrl = require('./controller/newDogController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();

app.use(express.json());

// Connect to the data base //
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected')
});

// Cookie Session Below //
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

// Main CTRL EndPoints Below //
app.post('/api/login', mainCtrl.login);
app.post('/api/register', mainCtrl.register);
app.post('/api/logout', mainCtrl.logout);

// CTRL for adding Dogs //
app.get('/api/dogs', newDogCtrl.getDogs);
app.post('/api/newdog', newDogCtrl.newDog);
app.post('/api/addtoaccount', newDogCtrl.addToAccount);




const port = SERVER_PORT;
app.listen(port, () => console.log(`Magic on Port: ${port}`));
