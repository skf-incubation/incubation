Template.manage_events.events({
	'click .add-event': function() {
		Session.set('manage-event-mode',true);
	}
});

Template.manage_events.helpers({
	'admin_manage_mode': function () {
		return Session.get('manage-event-mode');
	}
});

Template.add_event_form.events({
	'submit .add-event-btn': function(event) {
		event.preventDefault();
		Session.set('manage-event-mode',!(Session.get('manage-event-mode')));
	}
})
