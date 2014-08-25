App.Views.PostList = Backbone.View.extend({
  el: '#posts',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.addToList);
    this.render();
  },

  // events: {
  // 	'click img': 'showPost'
  // }

  render: function() {
    this.$el.empty();
    this.collection.each(function(post) {
      var postView = new App.Views.Post({
        model: post
      });
      this.$el.prepend(postView.el);
    }, this);
  },

  addToList: function(post) {
    var postView = new App.Views.Post({
      model: post
    });
    this.$el.prepend(postView.$el);
  }

 //  showPost: function() {
	// // var post = this.model;
	// // console.log(post);
	// console.log(this.collection.models);
	// App.Routers.posts.navigate('posts/' + post.id)
	// console.log('show post');
 //  }
});
