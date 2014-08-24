App.Collections.Posts = Backbone.Collection.extend({
	initialize: function() {
		console.log('Collection initialized, dude.');
	},
	model: App.Models.Post,
	url: '/posts'
});