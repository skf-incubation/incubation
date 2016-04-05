Template.events_grid.onCreated(function eventsPublications() {
	Meteor.subscribe('events');
})

Template.events_grid.helpers({
	'events': function() {
	return Events.find().fetch();
	} 
});

Template.event_card.helpers({
	'events': function() {
		return Events.find().fetch();
	}
})

Template.event_card.events({
	'submit .student-register': function(event) {
        event.preventDefault();
        Accounts.createUser({
        username: (event.target.email.value).split("@",1)[0],
        email: event.target.email.value,
        password: event.target.password.value,
        profile: {
            full_name: event.target.name.value,
            roll: event.target.roll.value,
            makautroll: event.target.makautroll.value,
            dept: event.target.dept.value,
            year: event.target.year.value,
            registered_for: "Robotics",
        }
    },(err) => {
        if(err) {
            swal("Oops ! Looks like you mistyped something.");
        } else {
            swal("Awesome! You have registered. Get ready with your teams");
        }
    });
    },
})




