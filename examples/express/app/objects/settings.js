var fs = require('fs')
var CONF_FILE = 'etc/conf.json';

exports = module.exports = function() {
  var settings = new Settings();
  
  settings.set('title', 'To Do List')
  
  if (fs.existsSync(CONF_FILE)) {
    var data = fs.readFileSync(CONF_FILE, 'utf8');
    var json = JSON.parse(data);
    if (json.title) { settings.set('title', json.title); }
  }
  
  return settings;
}

exports['@singleton'] = true;




function Settings() {
  this._hash = {};
}

Settings.prototype.get = function(key) {
  return this._hash[key];
}

Settings.prototype.set = function(key, val) {
  this._hash[key] = val;
}
