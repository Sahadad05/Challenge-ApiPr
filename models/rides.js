const mongoose = require('mongoose')
const {Schema}   = mongoose;


      const rideSchema = new Schema ({
        kilometers: {type: Number},
        minutes: {type: Number},
        price: {type: Number},
        pickupLatLng:[{
          Position0: {type: Number}, 
          Position1: {type: Number}
        }],
        destinationLatLng: [{
          Position0: {type: Number},
          Position1: {type: Number},
        }]
      });
    
    module.exports = mongoose.model('rides', driveSchema, rideSchema);