var jwt = require('jwt-simple');
var log = null;

function ApiLogin(_log){	
	log = _log;
}

ApiLogin.prototype.getToken = function(payload, secret, algorithm) {
	return jwt.encode(payload, secret, algorithm);
};

ApiLogin.prototype.isValid = function(token, secret, payload) {
	let decoded = null;
	try{
		if(token.length > 0){
			try{
				decoded = jwt.decode(token, secret);
			}
			catch(err){
				return false;
			}
			if(JSON.stringify(decoded) === JSON.stringify(payload)){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	}
	catch(err){
		return false;
	}
};


exports = module.exports = ApiLogin;
