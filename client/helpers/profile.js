Template.profile_edit.helpers({
    'name': Meteor.user().profile.full_name,
    'dept':Meteor.user().profile.dept,
});