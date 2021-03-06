Template.dashboard_layout.rendered = function() {
    swal("You can manage events here");
};

Template.front_page.rendered = function() {
    let u_id = Meteor.user();
    if(u_id) {
        Materialize.toast("Hi again ! "+u_id.username,3000);
    }
}

Template.sign_up.helpers({
    'userName': function () {
        var user = Meteor.user();
        return user !== null ? user.emails[0].address.split('@')[0] : null;
    }
})

Template.logged_in_nav_bar.rendered = function() {

}

var initializeNav = function() {
    // Some template changes require jQuery plugin reinitialization
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
};

Template.logged_in_nav_bar.helpers({
    'userName': function () {
    	var user = Meteor.user();
      	return user !== null ? user.emails[0].address.split('@')[0] : null;
    }
});

Template.nav_bar.helpers({
    'userName': function () {
        var user = Meteor.user();
        return user !== null ? user.emails[0].address.split('@')[0] : null;
    }
});

Template.logged_in_nav_bar.events({
    'click #logout': function () {
    	Meteor.logout();
    }
});

Template.manage_events.rendered = function () {
    Materialize.showStaggeredList('#event-list');
};

Template.nav_bar.rendered = initializeNav;
Template.side_nav.rendered = initializeNav;
Template.logged_in_nav_bar.rendered = initializeNav;
