Session.setDefault("isOther", "Self");
Session.setDefault("sCity", "Please Select");
Session.setDefault("sState", "Please Select");
Session.setDefault("isCreate", "create");

Template.createRequest.helpers({
    isEditFlow: function () {
        // console.log(Session.get("isCreate"));
        return (Session.get("isCreate") === "edit");
    },

    isCreateFlow: function () {
        // console.log(Session.get("isCreate"));
        return (Session.get("isCreate") === "create");
    },

    isEmergency : function(){
      // console.log("isemergency:",Session.get("getRequest").emergency);
      return (Session.get("getRequest").emergency === 'Yes');
    },

    getRequest : function() {
      check();
      return (Session.get('getRequest'));
    },

    'isOtherChecked': function (event) {
      console.log("isother:",Session.get("isOther"));
        return (Session.get("isOther") === "Other");
    },

    getAddress: function () {
        return (Session.get('userDetails'));
    },

    searchUser: function () {
        return (Session.get('searchResult'));
    },

    userId: function () {
        return (Session.get('requestorId'));
    },

    cityList: function () {
      return (Session.get('cityList'));
    },

    stateList: function () {
        return (Session.get('stateList'));
    },
    aidList: function () {
        return (Session.get('aidList'));
    }
});

Template.createRequest.onDestroyed(function () {

    delete Session.keys['isCreate'];
    delete Session.keys['requestId'];
});

Template.createRequest.onRendered(function () {
    // Session.get('request');
    var requestId = Session.get('requestId');
    console.log("requestId :!!", requestId);
    if(typeof requestId !== "undefined" ){
      console.log("edit flow!!!");
      Session.set("isCreate", "edit");
      console.log("setting iscreate flag:",Session.get("isCreate"));
      var request = {requestId:requestId};
      console.log("editRequest with session set:", JSON.stringify(request));
      Meteor.call('getRequest', request, function(err, result) {
        console.log("on rendered : getRequest: !! result:", JSON.stringify(result));
        Session.set('getRequest',result);
        if(result.requestType === 'Other')
        {
          Session.set('isOther', 'Other');
        }
      });
    }
    else{
      Meteor.call('getAddress', Meteor.userId(), function (err, result) {
          Session.set("userDetails", result);
          Session.set("isCreate", "create");
          console.log("setting iscreate flag:",Session.get("isCreate"));

      });
    }
});

Template.createRequest.events({
    'click .searchUser': function (event) {
        event.preventDefault();
        console.log("calling");
        Meteor.call("SearchUser", document.getElementById("requestorId").value, function (error, result) {
            Session.set("searchResult", result);
        });
    },

    "change #selectedUser": function (event, template) {
        var requestorId = $(event.currentTarget).val();
        Session.set("requestorId", requestorId);
        console.log(Session.get("requestorId"));
        Meteor.call('getAddress', Session.get("requestorId"), function (err, result) {
            Session.set("userDetails", result);
            console.log("on rendered result:", JSON.stringify(result));
        });
    },

    'change #requestType': function (event) {
        console.log(event.currentTarget.name);
        Session.set("isOther", event.currentTarget.value);
        console.log(Session.get("isOther"));
    },

    "change #scity-select": function (event, template) {
        var city = $(event.currentTarget).val();
        Session.set("sCity", city);
        console.log(Session.get("sCity"));
    }
    ,
    "change #sstate-select": function (event, template) {
        var state = $(event.currentTarget).val();
        Session.set("sState", state);
        console.log(Session.get("sState"));
    },

    'submit form': function (event) {
          console.log("submit start");
          event.preventDefault();
          var request = {};

            if(Session.get('isCreate') === "create"){
              if (event.target.address1.checked) {
                  request.line1 = event.target.p_line1.value;
                  request.line2 = event.target.p_line2.value;
                  request.city = event.target.p_city.value;
                  request.state = event.target.p_state.value;
                  request.country = event.target.p_country.value;
                  request.pincode = event.target.p_pincode.value;
              } else {
                  request.line1 = event.target.s_line1.value;
                  request.line2 = event.target.s_line2.value;
                  request.city = Session.get("sCity");
                  request.state = Session.get("sState");
                  request.country = event.target.s_country.value;
                  request.pincode = event.target.s_pincode.value;
              }

              if (event.target.requestType.value === "Self") {
                  request.requestType = "Self";
                  request.creatorId = Meteor.userId();
                  request.requestorId = Meteor.userId();
              } else {
                  request.requestType = "Other";
                  request.creatorId = Meteor.userId();
                  request.requestorId = event.target.requestorId.value;
              }
            }
            else{
              console.log("edit address flow input");
                request.line1 = event.target.p_line1.value;
                request.line2 = event.target.p_line2.value;
                request.city = Session.get("sCity");
                request.state = Session.get("sState");
                request.country = event.target.p_country.value;
                request.pincode = event.target.p_pincode.value;
                request.creatorId = event.target.creatorId.value;
                request.requestorId = event.target.requestorId.value;
            }
          request.requestName =  event.target.requestName.value;
          request.aid = event.target.aid.value;
          request.requiredBy =  event.target.requiredBy.value;

          if(event.target.emergencyYes.checked){
            request.emergency =  event.target.emergencyYes.value;
          }
          else{
            request.emergency =  event.target.emergencyNo.value;
          }
          request.status =  "Submitted";
          request.comment = event.target.comment.value;

          var requestJson = JSON.stringify(request);

          if(Session.get('isCreate') === "create"){
            console.log("CREATE REQUEST:" , requestJson);

            Meteor.call("saveRequest", request, function (error, result) {
                console.log("Client save request", JSON.stringify(result));

                if (error) {
                  console.log("error body", (error));
                  sAlert.error(error.reason);
                  Router.go("/createRequest");
                }
                else{
                  console.log("success");
                  sAlert.success("Successfully created your request!");
                  sAlert.success('', configOverwrite);
                }
            });
            delete Session.keys['isOther'];
            delete Session.keys['searchResult'];
            Router.go("/");
          }
          else{
            console.log("EDIT REQUEST:" , request);
            var requestID = event.target._id.value;
            console.log("request ID being editted:", requestID);
            Meteor.call("editRequest", requestID, request, function (error, result) {
                console.log("Client editRequest" , JSON.stringify(result));

                if (error) {
                  console.log("error body", (error));
                  sAlert.error(error.reason);
                  Router.go("/listOfRequests");
                }
                else{
                  console.log("success");
                  sAlert.success("Successfully saved you request!");
                  sAlert.success('', configOverwrite);
                }
            });
              delete Session.keys['isOther'];
              delete Session.keys['searchResult'];
            Router.go("/");
          }
    }
});
