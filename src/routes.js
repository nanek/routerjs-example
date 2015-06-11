
var util = require('./util');
var Post = require('./post-store');

var routes = {};

routes.index = {
  setup: function() {
    util.renderContent("index");
  }
};

routes.postIndex = {
  // Called automatically by router.js.
  //
  // @param [Transition] transition  The object representing this transition.
  //
  // @return [Promise] Transition flow pauses until this promise resolves.
  //
  beforeModel: function(transition) {

  },

  // Called automatically by router.js.
  //
  // @param [Object]     params      Url parameters.
  // @param [Transition] transition  The object representing this transition.
  //
  model: function(params, transition) {
    return Post.findAll().catch(function(error) {
      console.log(error);
    });
  },

  // Called automatically by router.js.
  //
  // @param [Object]     model       Model.
  // @param [Transition] transition  The object representing this transition.
  //
  // @return [Promise] Transition flow pauses until this promise resolves.
  //
  afterModel: function() {

  },

  setup: function(posts) {
    // render a template with the posts
    util.renderContent("postIndex", posts);
  },

  events: {
    // This event handler is called any time there is an error or a rejected
    // promise within the transition flow.
    //
    // @param [Object]     err         The error thrown.
    // @param [Transition] transition  The transition that has errored.
    //
    error: function(error, transition) {
      util.log(error);
    }
  }
};

routes.showPost = {
  model: function(params) {
    return Post.find(params.id);
  },

  setup: function(post) {
    util.renderContent("showPost", post);
  }
};

routes.newPost = {
  setup: function() {
    util.renderContent("newPost");
  }
};

routes.notFound = {
  setup: function() {
    util.renderContent("notFound");
  }
};

module.exports = routes;
