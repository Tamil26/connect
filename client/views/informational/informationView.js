Session.setDefault("sType","Please Select");

Template.informationView.helpers({
  typeList: function() {
    console.log("Session.get('typeList')",Session.get('typeList') );
    return (Session.get('typeList'));
  } ,
infoView: function () {
  return (Session.get('infoView'));
},
Stype: function() {
  return (Session.get("sType"));
},
isEqual: function(v1, v2) {
    if (v1 === v2){
        return true;}

    return false;
}
});

Template.informationView.events({
 "change #stype-select": function (event, template) {
      var type = $(event.currentTarget).val();
      console.log(type);
      Session.set("sType", type);
      Meteor.call("infoView",type, function(error, result){
      Session.set("infoView",result);
  });
},
"change #isVerified": function(event, template) {
  var changeId=event.currentTarget.name;
  console.log("id is"+ changeId);
    if(document.getElementsByName(changeId))
    {
      Meteor.call("infoUpdate",this._id);
      }

  },
  'click .Verify': function (event) {
      event.preventDefault();
      console.log("verify button");
      var Ftype =Session.get('sType');
      //
      Meteor.call("infoView",Ftype, function(error, result){
      Session.set("infoView",result);
  });
}

});
