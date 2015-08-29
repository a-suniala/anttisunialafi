Meteor.subscribe("tags");

Template.tagsList.helpers({
  tags: function () {
    return Tags.find({});
  }
});