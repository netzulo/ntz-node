/*
@HOWtO: 
var Log = require('./ntz/logger.js');
var log = new Log('ntz');
*/
//------------------------------------------------------------------------------------
//Imports
var log4js = require('log4js');
//------------------------------------------------------------------------------------
//Main Class
function Log(_logNames){			
	log4js.loadAppender('file');	

	if(_logNames.length != 0){		
		var that = this;
		_logNames.forEach(function(_logName){
			that.create(_logName);
		});
	}
	
};
//Main Methods
Log.prototype.getLog = function(_logName) {
	return log4js.getLogger(_logName);
};

Log.prototype.trace = function (_logName, msg){
	this.getLog(_logName).trace(msg);
};

Log.prototype.debug = function (_logName, msg){
	this.getLog(_logName).debug(msg);
};

Log.prototype.info = function (_logName, msg){
	this.getLog(_logName).info(msg);
};

Log.prototype.warn = function (_logName, msg){
	this.getLog(_logName).warn(msg);
};

Log.prototype.error = function (_logName, msg){
	this.getLog(_logName).error(msg);
};

Log.prototype.fatal = function (_logName, msg){
	this.getLog(_logName).fatal(msg);
};

/**
@HOWTO: will write logfile
 create('/home/user', 'myfile') : '/home/user/myfile.log'
*/
Log.prototype.create = function(_logDir,_logName) {
	//Select logger name and logger filename
	logName = _logName || 'ntz';

	log4js.addAppender(log4js.appenders.file(_logDir +'/'+ logName +'.log'), logName); 

	this.getLog(logName).setLevel('DEBUG');

	this.debug(logName, "Logger | ON");	
};

exports = module.exports = Log;
