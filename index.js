var path = require("path");

module.exports = function(content) {
  this.cacheable();

  var fileName = path.basename(this.resourcePath);
  var resourceName = path.basename(this.resourcePath, path.extname(fileName));

  var titleizedResourceName = resourceName[0].toUpperCase() + resourceName.slice(1);

  var logger = "var log = require('bows')('" + titleizedResourceName + "');\n";
  var result = logger + content;

  return result;
};
