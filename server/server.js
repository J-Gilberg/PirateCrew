const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config');
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
require('./routes/PirateCrew.routes')(app);
require('./routes/User.routes')(app);
 // this need to be changed per project
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})