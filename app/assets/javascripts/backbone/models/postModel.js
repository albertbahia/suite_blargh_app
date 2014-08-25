App.Models.Post = Backbone.Model.extend({
  initialize: function() {
    console.log('New Post Model Created.');
  },
  urlRoot: '/posts'
})
