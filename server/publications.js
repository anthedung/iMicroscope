Meteor.publish('posts_published', function(){
	return Posts.find({title: {$ne: "Introducing Telescope"}});
})