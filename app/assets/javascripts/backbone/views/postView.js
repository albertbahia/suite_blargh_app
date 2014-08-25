App.Views.Post = Backbone.View.extend({
  className: 'post',

  initialize: function() {
    this.template = HandlebarsTemplates['posts/post'];
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  },

  events: {
    'click button': 'deletePost'
  },

  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
  },

  deletePost: function() {
    this.model.destroy();
  }
});
