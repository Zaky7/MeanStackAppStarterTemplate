# MeanStackAppStarterTemplate

A starter Template of Mean Stack app with Authentication using passport-jwt and basic routes and flash messages.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

 1. Npm
 2. Angular Cli
 3. Node
 4. MongoDB

 For version see package.json


## Installing
Move to the root Folder and run following commands
### Node Server
```bash
npm install
```
### Angular Cli
```bash
npm install -g @angular/cli
```     
### MongoDB
https://docs.mongodb.com/manual/installation/

## Running the app

### Running local Mongod Server
   For Windows User
      https://stackoverflow.com/a/48826944/7807275
 
 For Mac User
	 1. Move to data->db     ```  cd /data/db```
	 2.  Run the mongo server by running command ```mongod```
	 3. Open new Terminal and move to cd  /usr/local/bin ```cd /usr/local/bin```
	 4. Type command ./mongo ```./mongo```		
 
 ### Running the Node Server
	 npm start
OR
Install nodemon it helps you to restart the server as you make changes in  the files

   ```bash
npm install -g nodemon
```

You can change the port by specifying the port number in PORT constant in app.js
### Running the Front End App
Move to angular-src folder and run the following command
   ```bash
ng serve
```
   