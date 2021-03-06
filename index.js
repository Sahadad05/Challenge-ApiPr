const express =  require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Driver');
require('./services/passport');



const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) =>{
  res.send({hi: 'there'});
})

// app.get('/', (req, res) => {
  mongoose.connect(keys.mongoURI);
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT);