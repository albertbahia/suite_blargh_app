# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

authors = ["mark", "eduardo", "chris", "dustin", "sean"]

titles = ["the network", "thefacebook", "moloso", "yolo, yes"]

contents = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus gravida nunc, a finibus nisi feugiat ut. Suspendisse vitae enim ipsum. Mauris eget aliquam tellus, vitae laoreet massa. Donec pharetra nisi sed nisl aliquet, ut faucibus odio suscipit. Morbi scelerisque dictum orci at auctor. Suspendisse urna magna, molestie vel dolor sed, ultrices feugiat leo. Nulla molestie mollis mauris, a dictum nulla fermentum eget. Praesent sit amet vestibulum est. Sed vehicula volutpat vulputate. Mauris diam eros, tristique quis posuere ac, feugiat sed purus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum libero ut nulla fermentum, id finibus turpis lobortis.", "Proin vel finibus sem, vel sagittis lectus. Nunc vel placerat augue. Sed sagittis felis sem, vitae maximus justo gravida sed. Vivamus et rutrum nulla, a ornare metus. Duis pellentesque augue nec libero rutrum rutrum. Etiam sed nunc sit amet velit vulputate semper. Sed nisl justo, tempor ac porttitor lacinia, laoreet quis neque. Proin ut egestas ex. Ut tempus dolor turpis, eu tristique ipsum lacinia ac. Quisque elit odio, interdum quis iaculis euismod, tempor imperdiet nibh. Proin fermentum dolor vitae nisi pellentesque pretium. Vivamus in nunc molestie, lacinia leo sed, blandit sapien. Integer eu condimentum lacus. Fusce pulvinar, elit a blandit aliquam, felis est pulvinar ex, vel fringilla nunc purus in nunc. Nulla facilisi. Curabitur condimentum tortor in massa tempus viverra."]

photos = ["http://imgs.comule.com/images/qmino5grai1kg6insyec.jpg", "http://readwatchwrite.com/wp-content/uploads/2012/09/socialnetwork6.jpg", "http://wallpaperest.com/wallpapers/movie-the-social-network_314352.jpg"]

authors.each do |author|
	Post.create({
		author: author,
		title: titles.sample,
		content: contents.sample,
		photo_url: photos.sample	
	})
end


