var App.Views.Post = Backbone.View.extend({
	el: '#posts',

	template: HandlebarsTemplates['posts/post'],

	initialize: function() {
		console.log('View initialized, dude.');
		this.render();
	},

	render: function() {
		console.log('View rendering, dude.');
		this.$el.html(this.template());
	}
});