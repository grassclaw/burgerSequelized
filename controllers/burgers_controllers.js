// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models - split by action

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();

// Create routes

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page (render all burgers)
router.get('/index', function (req, res) {
  // Sequelize Query to get all burgers from database (and join them to their devourers)
  models.burgers.findAll({
   include: [{model: models.devourers}]
  }).then(function(data){

    var hbsObject = { burgers: data };
    res.render('index', hbsObject);

  })

});

// Create a New Burger
router.post('/burger/create', function (req, res) {

  // Sequelize Query to add new burger to database
  models.burgers.create(
    {
      burger_name: req.body.burger_name,
      devoured: false
    }
  ).then(function(){
    // After the burger is added to the database, refresh the page
    res.redirect('/index');
  });

});



// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {

  // If no name was added = "Mystery"
  if(req.body.burgerEater == "" || req.body.burgerEater == null){
    req.body.burgerEater = "Mystery";
  }

  // Create a new burger devourer (and also join it to the eaten burger's id)
  models.devourers.create({
    devourer_name: req.body.burgerEater,
    burgerId: req.params.id
  })

  // Select the eaten burger by it's id
  .then(function(newDevourer){

    models.burgers.findOne( {where: {id: req.params.id} } )

    // Use the returned burger object to...
    .then(function(eatenBurger){
      // Update the burger's status to devoured
      eatenBurger.update({
        devoured: true,
      })

      // The burger is devoured, so refresh the page
      .then(function(){
        res.redirect('/index');
      });

    });

  });

});


// Export routes
module.exports = router;