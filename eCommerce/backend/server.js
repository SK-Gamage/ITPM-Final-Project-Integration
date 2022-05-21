const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

//add modleware
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8070;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => {
    console.log('DB Connected');
})
.catch(err => console.log('DB Connection error: ' + err.message));

app.listen(PORT, () => {
    console.log('Listening on port:' + PORT);
});

//import routes
const cartPDFRoutes = require('./routes/SK_route/carts');

//routes
app.use(CartRoutes);

// report generate routes
const cartPDFRoutes = require ('./routes/SK_route/PDF_Generator/carts_report');
app.use(cartPDFRoutes); 