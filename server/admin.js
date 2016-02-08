Meteor.methods({
	'grant_admin_rights': function(u_id) {
		Roles.addUsersToRoles( u_id,['admin']);
	},
});