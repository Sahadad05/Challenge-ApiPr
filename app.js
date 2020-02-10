// var express = require("express"),
//     app = express(),
//     http = require("http"),
//     server = http.createServer(app),
//     bodyParser  = require("body-parser"),
//     methodOverride = require("method-override");
//     mongoose = require('mongoose');
//     Rides = require('./controllers/rides'),
//     models = require('./models/rides')

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(methodOverride());

// var router = express.Router();
// router.get('/', function(req, res) {
//    res.send("Hello World!");
// });

// var rides = express.Router();

// rides.route('/rides')
// .get(Rides.findallRides)
// .post(Rides.addRide);

// rides.route('/rides/:id')
// .get(Rides.findById)
// .put(Rides.updateRide)
// .delete(rides.deleteRide)


// app.use(router);
// app.use('/api', rides);

// mongoose.connect('mongodb://localhost/rides', function(err, res) {
//   if(err) {
//     console.log('ERROR: connecting to Database. ' + err);
//   }
// })

// app.listen(3000, function() {
//   console.log("Node server running on http://localhost:3000");
// });