// set up
var express = require('express'); //variable express says it requires express to run
var app = express();
var mongoose = require('mongoose'); //variable mongoose says it requires mongoose to run
var port = process.env.PORT || 8080;
var database = require('./config/database');
var path = require('path');
var bodyParser = require('body-parser');
var Reviews = require('./models/reviews')

//configuration
mongoose.connect(database.localUrl); //est. connection between app and mongle.db

//routes
var router = express.Router();
//middleware to use for all requests
router.use(function(req,res,next){
    //logging happens here
    console.log('Something will happen.');
    next(); //Head to the next router..don't stop here
});

//app.use(express.static(staticAssets));
app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//listen (start app with node.js)
app.listen(port);
console.log("App listening on port " + port);




//Test router to make sure everything is working (accessed at GET)
router.get('/', function(req,res){
    res.json({message: 'hooray! welcome to our api!'})
})

//More routes will happen here with routes that end in "/reviews"
router.route('/reviews')
    //Create a review (accessed at POST http://localhost:8080/api/reviews)
    .post(function(req,res){
    var review = new Reviews(); //create a new instance of the review model
    console.log(req);
    review.name = "binit"; //set the reviews name (come from the request)
    
    //res.send(200, req.body);
    review.save(function(err){
        if (err)
            res.send(err);
        res.json({message: 'Review created!!'});
    });
});




