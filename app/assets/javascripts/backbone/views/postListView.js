App.Views.PostList = Backbone.View.extend({
	el: '#posts',

	initialize: function() {
		console.log('Collection view initialized, dude.');
		this.render();
	},

	render: function() {
		console.log('Collection view rendered, dude.');
		this.$el.empty();
		this.collection.each(function(post) {
			var postView = new App.Views.Post({ model: post });
			this.$el.prepend(postView.el);
		}, this);
	}
});