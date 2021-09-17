const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
require('./server/routes/PirateCrew.routes')(app);
require('./server/routes/User.routes')(app);
 // this need to be changed per project
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})