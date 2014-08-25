App.Routers.Posts = Backbone.Router.extend({

  routes: {
    '': 'index',
    'posts/new': 'new',
    'posts/:id': 'showPost'
  },

  index: function() {
    App.Collections.posts.fetch({reset: true});
  },

  new: function() {
    var posts = App.Collections.posts;
    if (posts.models.length === 0) {
      posts.fetch({reset: true});
    };
  },

  // showPost: function(postID) {
  //   var posts = App.Collections.posts;
  //   posts.fetch({ reset: true,
  //     success: function() {
  //       App.Views.posts.showPost(posts.get(postID));
  //     }
  //   });
  // }
});
