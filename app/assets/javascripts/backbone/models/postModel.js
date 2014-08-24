App.Models.Post = Backbone.Model.extend({
	initialize: function() {
		console.log('Model initialized.');
	},
	urlRoot: '/posts'
});