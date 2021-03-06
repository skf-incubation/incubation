// entry point of app
FlowRouter.route('/', {
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

FlowRouter.route('/about', {
    action: (params,queryParams) => {
        BlazeLayout.render('layout',{top:"nav_bar",main:"about"});
    }
})


FlowRouter.route(['/dashboard','/profile'], {
    triggersEnter: [isLoggedIn],
    action: (params, queryParams) => {
        BlazeLayout.render('dashboard_layout', { top: "logged_in_nav_bar", main: "profile_pane", side: "side_nav" });
    }
});


FlowRouter.route('/incubation-events',{
    name:"incubation-events",
    action : (params,queryParams) => {
        BlazeLayout.render('event_temp', {top:"nav_bar",main:"events_grid"});
    }
});

FlowRouter.route('/manage-events', {
    name:"manage-events",
    //triggersEnter:[isAdmin],
    action:(params,queryParams) => {
        if(Session.get('manage-event-mode')) {
            BlazeLayout.render('admin',{top:"nav_bar",main:"add_event_form"});
        } else {
            BlazeLayout.render('admin',{top:"nav_bar",main:"manage_events"});    
        }
        
    }
})

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