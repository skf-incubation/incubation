Template.register.events({
    'submit .student-register': function(event) {
        event.preventDefault();
        setTimeout(function() {
        swal('Awesome! now go the events page');
        }, 5000);
        Accounts.createUser({
        username: (event.target.email.value).split("@",1)[0],
        email: event.target.email.value,
        password: event.target.password.value,
        profile: {
            full_name: event.target.name.value,
            roll: event.target.roll.value,
            makautroll: event.target.makautroll.value,
            dept: event.target.dept.value,
            year: event.target.year.value
        }
    },(err) => {
        if(err) {
            console.log(err.reason);
        } else {
            //BlazeLayout.render('loading');
            FlowRouter.go('/dashboard');
        }
    });
    }
});


Template.signin.events({
    'submit .students-sign-in': function(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        Meteor.loginWithPassword(email,password,(err) => {
            if (err) {
                console.log(err.reason);
            } else {
                FlowRouter.go('/dashboard');
            }
        });
    }
})

Template.register.rendered = () => {
    $(document).ready(function() {
    $('input#makautroll, textarea#textarea1').characterCounter();
  });
}