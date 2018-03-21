if(process.env.NODE_ENV === 'production'){
	module.exports = {
		database: 'mongodb://zakir:6123906@ds117489.mlab.com:17489/meanauthzak',
		secret: 'yoursecret'
	}
}else{
	module.exports = {
		database: 'mongodb://localhost:27017/meanauth',
		secret: 'yoursecret'
	}
}

//'mongodb://localhost:27017/meanauth'
//'mongodb://Zakir:6123906@ds113849.mlab.com:13849/meanauth'
//27017 is default port of mongo db
//meanauth is name of database
