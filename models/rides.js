var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

    var driveSchema = new Schema({
        id: {type: String },
        name: {type: String},
      });

      var rideSchema = new Schema ({
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
    
    module.exports = mongoose.model('Rides', driveSchema, rideSchema);