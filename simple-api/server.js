const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");

const port = 8000;

const favourites = require("./routes/favourites");
const weather = require("./routes/weather");

const app = express();
app.use(express.json());
app.use(cors());


app.use("/favourites", favourites);
app.use("/weather", weather);
app.use(bodyParser.urlencoded({extended: true}));

(async function () {
    await mongoose.connect(`mongodb://localhost/lab4`, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

})();


