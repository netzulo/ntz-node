//------------------------------------------------------------------------------------
//Imports
var cmd=require('node-cmd');

var logger = null;
var config = null;
var sciptsDir = __dirname;
//------------------------------------------------------------------------------------
//Main Class
function Commander(_config, _logger, _scriptsDir){	
	scriptsDir += _scriptsDir
	config = _config;
	logger = _logger;
};
//------------------------------------------------------------------------------------
//Main Methods
Commander.prototype.exec = function(_command) {
	let command = _command;

    cmd.get( command ,function(output){
       	logger.info(config.cmd.logger,"CMD: "+ command +" | output: " + output);
    });

};

Commander.prototype.p0f = function(args) {
	let command = "p0f " + args;
	this.exec(command);
};

Commander.prototype.nmap = function(args) {
	let command = "nmap " + args;
	this.exec(command);
};

Commander.prototype.sqlmap = function(args) {
	let command = "sqlmap " + args;
	this.exec(command);
};

Commander.prototype.wifite = function(args) {
	let command = "wifite " + args;
	this.exec(command);
};

Commander.prototype.reaver = function(args) {
	let command = "reaver " + args;
	this.exec(command);
};

Commander.prototype.webscarab = function(args) {
	let command = "webscarab " + args;
	this.exec(command);
};

Commander.prototype.wpsscan = function(args) {
	let command = "wpsscan " + args;
	this.exec(command);
};

Commander.prototype.ismtp = function(args) {
	let command = "ismtp " + args;
	this.exec(command);
};
//------------------------------------------------------------------------------------
//EXPORTs module
exports = module.exports = Commander;
