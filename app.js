const express 			= require('express');
const path 					= require('path');
const bodyParser 		= require('body-parser');
const cors 					= require('cors');
const passport 			= require('passport');
const mongoose 			= require('mongoose');
const config 				= require('./config/database');


 
mongoose.connect(config.database);

//Displaying when Connection Established
mongoose.connection.on('connected', () => {
	console.log('Connected to the DataBase ' + config.database); 
});

//When there is an errornode
mongoose.connection.on('error', (error) => {
	console.log('DataBase Error: ' + config.database); 
});


/**************************************** Setting The App **************************************/
const app = express();
const port = process.env.PORT || 8080;


/**************************************** MiddleWares **************************************/

// CORS middleWare
app.use(cors());

//Set Static Folder for client Side Code
app.use(express.static(path.join(__dirname,'public')));

//Body Parser MiddleWare
//Body Parser MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//PassPort MiddleWare
app.use(passport.initialize());
app.use(passport.session()); 
require('./config/passport')(passport);


/**************************************** External Routes **************************************/
//Users Route
const users = require('./routes/users'); 
app.use('/users',users);


/**************************************** Routes ******************************************/
//Specifying the Index Route
app.get('/',(req,res) => {
   res.send('Invalid Endpoint');
});




//Specify the listen Port
app.listen(port,() =>{
	console.log('Server Started at Port: '+port);
});

