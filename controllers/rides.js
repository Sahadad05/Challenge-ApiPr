var mongoose = require('mongoose');
var Rides  = mongoose.model('Rides');

//GET - Return all drivers in the DB
exports.findAllDriver = function(req, res){
  Drivers.find(function(err, drivers){
    if(err) res.send(400, err.message);
    console.log('GET /drivers')
    res.status(200).jsonp(rides);
  });
};

//GET - Return a Driver with specified ID
exports.findById = function(req, res) {
	Drivers.findById(req.params.id, function(err, drivers) {
    if(err) return res.send(500, err.message);

    console.log('GET /drivers/' + req.params.id);
		res.status(200).jsonp(drivers);
	});
};

//GET - Return all rides in the DB
exports.findAllRides = function(req, res) {
	Rides.find(function(err, rides) {
    if(err) res.send(400, err.message);

    console.log('GET /rides')
		res.status(200).jsonp(rides);
	});
};

//POST - Insert a new Ride in the DB
exports.addRide = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var ride = new Ride({
		kilometers:    req.body.kilometers,
		minutes: 	  req.body.minutes,
		price:  req.body.price,
		pickupLatLng:   req.body.pickupLatLng,
		destinationLatLng:  req.body.destinationLatLng,
	});

	ride.save(function(err, ride) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(ride);
	});
};

//PUT - Update a ride already exists
exports.updateRide = function(req, res) {
	Ride.findById(req.params.id, function(err, ride) {
    ride.id   = req.body.petId;
		ride.kilometers    = req.body.kilometers;
		ride.minutes = req.body.minutes;
		ride.price  = req.body.price;
		ride.pickupLatLng = req.body.pickupLatLng;
		ride.destinationLatLng   = req.body.destinationLatLng;

		ride.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(ride);
		});
	});
};

//DELETE - Delete a Ride with specified ID
exports.deleteRide = function(req, res) {
	Ride.findById(req.params.id, function(err, ride) {
		ride.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};

