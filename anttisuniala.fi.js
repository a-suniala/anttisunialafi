Tags = new Mongo.Collection("tags");

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Meteor.publish("tags", function () {
    return Tags.find();
  });
}


if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("tags");

  Template.body.helpers({
    tags: function () {
      return Tags.find({});
    }
  });
}