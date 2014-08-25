App.Views.PostList = Backbone.View.extend({
  el: '#posts',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.addToList);
    this.render();
  },

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
});
