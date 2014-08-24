App.Views.Post = Backbone.View.extend({
	className: 'post',

	tagName: 'div',

	initialize: function() {
		console.log('View initialized, dude.');
		this.template = HandlebarsTemplates['posts/post'];
		this.render();
	},


	render: function() {
		console.log('View rendering, dude.');
		this.$el.empty();
		this.$el.html(this.template(this.model.toJSON()));
	}
});