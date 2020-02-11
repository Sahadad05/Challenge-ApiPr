const mongoose = require('mongoose');
const { Schema }  = mongoose;

const driverSchema = new Schema ({
  id: {type: String},
  name: {type: String},
});


mongoose.model('drivers', driverSchema);