console.log("Hello world")
//index.js
//Import Express
let express = require('express');
//Start App
let app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH")
    res.header('Content-Type', 'text/plain');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next();
  });
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//Assign port process.env.PORT || 
var port = 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})
let apiRoutes = require("./routes")
//Use API routes in the App
app.use('/api', apiRoutes)







//index.js
//import body parser

//connect to mongoose
const dbPath = "mongodb+srv://litman:gonzales@cluster0.ii8cg.mongodb.net/Cluster0?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})













// const uri = "mongodb+srv://litman:gonzales@cluster0.ii8cg.mongodb.net/Cluster0?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const db = client.db('gamesDb');
//   // perform actions on the collection object
//   var mario = {"Name":"Super Mario Bros.","System":["NES"],"Genre":["Platform"],"Release Date":{"$date":{"$numberLong":"495439200000"}}}
//   var metroid = {"Name":"Metroid","System":["NES"],"Genre":["Action-Adventure"],"Release Date":{"$date":{"$numberLong":"523692000000"}}}
//   var superSmashBrosBrawl = {"Name":"Super Smash Bros. Brawl","System":["Wii"],"Genre":["Fighting"],"Release Date":{"$date":{"$numberLong":"1201759200000"}}}

//   function InsertGame(game)
//   {
//     db.collection("games").insertOne(game, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//     });
//   }

//   function Getall()
//   {
//     db.collection("games").find({}).toArray(function(err,results){
//       if (err) throw err;
//       console.log(results)
//     });
//   }

//   function GetCategory(category)
//   {
//     db.collection("games").find({Genre:category}).toArray(function(err,results){
//       if (err) throw err;
//       console.log(results)
//     });
//   }

//   function GetSystem(system)
//   {
//     db.collection("games").find({System:system}).toArray(function(err,results){
//       if (err) throw err;
//       console.log(results)
//     });
//   }

//   function GetGameByName(name)
//   {
//     db.collection("games").find({Name:name}).toArray(function(err,results){
//       if (err) throw err;
//       console.log(results)
//     });
//   }
  

//   // Getall();
//   // InsertGame(mario);
//   // Getall();
//   // GetSystem("NES")
//   // GetCategory("Platform")
//   GetGameByName("Metroid")
//   setTimeout( () =>{
//     client.close();
//     //C - 1 second later
// }, 5000);
// });



