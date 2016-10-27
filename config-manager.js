var fs = require('fs');
var cfg = {};

function ConfigManager(){
	this.load("gigas_qadmin");
}

ConfigManager.prototype.load = function(_pathname) {	
	let pathname = './ntz/configs/'+ _pathname +'.json';

	cfg = JSON.parse(fs.readFileSync(pathname, 'utf8'));
};

ConfigManager.prototype.getConfig = function() {
	return cfg;
};


exports = module.exports = ConfigManager;
