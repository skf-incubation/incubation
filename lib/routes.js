// entry point of app
FlowRouter.route('/', {
    triggersEnter: [isLoggedIn],
    action: (params, queryParams) => {
        BlazeLayout.render('layout', { top: "nav_bar", main: "front_page" });
    },
    name: "home" // optional
});

FlowRouter.route('/updates',{
    action: (params,queryParams) => {
        BlazeLayout.render('layout',{top:"nav_bar", main:"updates" });
    }
});

FlowRouter.route(['/sign-in'],{
    triggersEnter:[isLoggedIn],
    action: (params,queryParams) => {
        BlazeLayout.render('layout', {top:"nav_bar",main:"signin"});
    },
});

FlowRouter.route('/sign-up',{
    triggersEnter:[isLoggedIn],
    action: (params,queryParams) => {
        BlazeLayout.render('layout', {top:"nav_bar",main:"register"});
    },
});

FlowRouter.route('/logout', {
    action: () => {
        if (Meteor.loggingIn() || Meteor.user()) {
            Meteor.logout( () => {
            FlowRouter.go('/');
            });
        }
    }
});


FlowRouter.route(['/dashboard','/profile'], {
    triggersEnter: [isLoggedIn],
    action: (params, queryParams) => {
        BlazeLayout.render('dashboard_layout', { top: "logged_in_nav_bar", main: "profile_pane", side: "side_nav" });
    }
});


FlowRouter.route('/events',{
    name:"events",
    action : (params,queryParams) => {
        BlazeLayout.render('events', {top:"nav_bar",main:"front_page"});
    }
});

// agnostic helpers here

studentLogout = () => {
    FlowRouter.go('/');
};

function isLoggedIn (context) { // define default override for the root route
    if (Meteor.loggingIn() || Meteor.user()) {
        FlowRouter.go('/dashboard');
    } else {

    }
}