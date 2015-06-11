var router = new Router.default();

router.map(function(match) {
  match("/").to("index");
  match("/posts/:id").to("showPost");
  match("/posts").to("postIndex");
  match("/posts/new").to("newPost");
  match("*notFound").to("notFound");
});

module.exports = router;
