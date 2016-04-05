if (Meteor.isServer) {
	Meteor.publish('events', function eventsPublications() {
		return Events.find();
	})
}

Meteor.startup(()=>{
	Events.remove({});
	seedEventCollection();
});

function seedEventCollection() {
	Events.insert({
    "name":"Manual Robotics",
    "details":"A manual robotics event\
	where students get to learn the \
	foundation principles behind robotics",
    "caption":"Bring those machines to life",
    "icon":"http://www.technogala.com/wp-content/uploads/2013/12/Robotic-Arm.jpg",
    "department":"All Streams",
    "time": new Date()
	});

	Events.insert({
    "name":"A droid talks to Duino",
    "details":"This workshop will introduce\
     students to basics of interacting arduinos\
     with an android device, and to automate\
     some electronic devices",
    "caption":"Automate with the droids",
    "icon":"https://lh6.ggpht.com/ydol6v1uv6PCQdVZU3D0HucU6fqbYbQctmOqkwJ56QD65h3OaNam5cELB3FgnZpMCII=w300",
    "department":"ECE and CSE",
    "time": new Date()
	});
}

Meteor.methods({
	'grant_admin_rights': function(u_id) {
		Roles.addUsersToRoles( u_id,['admin']);
	},
});