App.Collections.Posts = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Posts Collection');
  },
  model: App.Models.Post,
  url: '/posts'
})
