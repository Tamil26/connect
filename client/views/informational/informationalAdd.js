Session.setDefault("sCity", "Please Select");
Session.setDefault("sState", "Please Select");
Session.setDefault("sType", "Please Select");

Template.informationAdd.helpers ({
  cityList: function () {
    return (Session.get('cityList'));
  },

  stateList: function () {
    return (Session.get('stateList'));
  },
  typeList: function() {
    console.log("Session.get('typeList')",Session.get('typeList') );
    return (Session.get('typeList'));
  }

 });

Template.informationAdd.events({

  "change #scity-select": function (event, template) {
      var city = $(event.currentTarget).val();
      Session.set("sCity", city);
  },

  "change #sstate-select": function (event, template) {
      var state = $(event.currentTarget).val();
      Session.set("sState", state);
  },

  "change #stype-select": function (event, template) {
      var type = $(event.currentTarget).val();
      Session.set("sType", type);
  },
  'submit form': function (event) {
      event.preventDefault();
      var info ={}
      info.infoTitle=event.target.infoTitle.value;
      info.infoType=Session.get('sType');
      info.informationDescription=event.target.infoDescription.value;
      info.line1 = event.target.s_line1.value;
      info.line2 = event.target.s_line2.value;
      info.city = Session.get("sCity");
      info.state = Session.get("sState");
      info.country = event.target.s_country.value;
      info.pincode = event.target.s_pincode.value;
      info.contactPhone=event.target.infoPhone.value;
      info.addedById=Meteor.userId();
      if (Roles.userIsInRole(Meteor.userId(),'Admin') || document.getElementById("isVerified").checked)
      info.verificationStatus="Yes";
      else {
        info.verificationStatus='No';
      }
      console.log("information"+JSON.stringify(info));
      Meteor.call("AddInfo",info,function (error, result){
        if (error) {
          console.log("error body", (error));
          sAlert.error(error.reason);
          Router.go("/createRequest");
        }
        else{
          console.log("success");
            sAlert.success("Successfully added the Information")

      }

    });
}

});
