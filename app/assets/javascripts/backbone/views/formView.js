App.Views.addPostForm = Backbone.View.extend({
  el: '#form',

  initialize: function() {
    this.template = HandlebarsTemplates['posts/form'];
    this.render();
  },

  events: {
    'click button': 'addPost'
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
  },

  addPost: function() {
    var post = {
      author: this.$el.find("#author").val(),
      title: this.$el.find("#title").val(),
      content: this.$el.find("#content").val(),
      photo_url: this.$el.find("#photo_url").val(),
    };
    this.collection.create(post);
    $('input').val('');
    
    App.Routers.posts.navigate('');

    console.log(post);
    console.log('adding post');
  }
});
