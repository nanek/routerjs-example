var template = require('lodash.template');

var templates = {
  index: template('<h1>Index</h1>'),
  postIndex: template('<h1>Post Index</h1>'),
  showPost: template('<h1>Show Post</h1><div>Name:<%= name %>!</div>'),
  newPost: template('<h1>New Post</h1>'),
  notFound: template('<h1>Not Found Page</h1>')
}

var renderContent = function(templateName, data) {
  var html = templates[templateName](data);
  $(".content").html(html);
}

var log = function(msg) {
  console.log(msg);
}

module.exports = {
  renderContent: renderContent,
  log: log
}
