Template.logged_in_nav_bar.helpers({
    userName: () => {
        let u_name = Meteor.user().username;
        u_name = u_name.charAt(0).toUpperCase() + u_name.slice(1);
        return u_name;
    }
});

Template.nav_bar.helpers({
    userName: () => {
        let u_name = Meteor.user().username;
        u_name = u_name.charAt(0).toUpperCase() + u_name.slice(1);
        return u_name;
    }
});