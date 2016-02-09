Events = new Mongo.Collection("events");

var Schemas = {};

Schemas.Events = new SimpleSchema({
    name: {
        label:"Name",
        type:String,
        max:100,
    },
    details: {
        label:"Details",
        type: String,
        max:1000,
    },
    caption: {
        label:"Details",
        type: String,
        max:120,
    },
    icon: {
        label:"Image",
        type: String,
    },
    fullImage: {
        label:"ImageDetail",
        type: String,
    },
    department: {
        label:"Department",
        type:String,
    },
    time:{
        label:"Time",
        type:String,
    }
});

Schemas.UserProfile = new SimpleSchema({
    full_name:{
        type:String
    },
    roll:{
        type:Number
    },
    makautroll:{
        type:Number
    },
    dept:{
        type: String
    },
    year: {
        type:Number
    }
})

Schemas.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: [String],
        optional: true
    },
    heartbeat: {
        type: Date,
        optional: true
    }
});


Meteor.users.attachSchema(Schemas.User);
Events.attachSchema(Schemas.Events);
