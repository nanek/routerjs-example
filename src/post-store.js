// Post data.
//
var posts = {
  0: {
    name: 'How to setup Router.js',
    author: 'user1'
  },
  1: {
    name: 'Promises 101',
    author: 'user2'
  }
}

// Post data store.
var Post = {};

// Finds a post based on an id.
// @param [String]     id         Post id.
//
// @return [Promise]
//
Post.find = function(id){
  var promise = new RSVP.Promise(function(resolve, reject) {
    if (posts[id]) {
      resolve(posts[id]);
    } else {
      reject(new Error("Post not found for id: " + id));
    }
  });

  return promise;
};

// Finds all posts.
//
// @return [Promise]
//
Post.findAll = function() {
  var promise = new RSVP.Promise(function(resolve, reject) {
    resolve(posts);
  });

  return promise;
}

module.exports = Post;
