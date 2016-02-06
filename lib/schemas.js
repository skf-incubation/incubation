Events = new Mongo.Collection("events");
Students = new Mongo.Collection("students");

var Schemas = {};


// schemas are not enforced now, into db inserts.

Schemas.Students = new SimpleSchema( {
    name:{
        label:"Name",
        type:String,
        max:50,
    },
    department:{
        label:"Department",
        type:String,
        max:3
    },
    roll_no:{
        label:"Roll No",
        type:String,
    }
});

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

Events.attachSchema(Schemas.Events);
