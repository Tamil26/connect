
Template.listOfRequests.helpers({getRequestList : function() {
  check();
  return (Session.get('ListOfRequests'));
},
    aidList: function () {
        console.log(Session.get('aidList'));
        return (Session.get('aidList'));
    }

});

Template.listOfRequests.onRendered(function() {
  // if ( _.isEmpty(Session.get('req')) ) {
    var creatorId = Meteor.user()._id ;
    var request = {creatorId:creatorId};
  // alert(JSON.stringify(request));
    console.log("list of requestss: request:", JSON.stringify(request));
    console.log("list of  requests with session set:", JSON.stringify(request));
    Meteor.call('getListOfRequest', request, function(err, result) {
      console.log("error!!!???:", err);
      console.log("on rendered result:", JSON.stringify(result));
      Session.set('ListOfRequests',result);
    });
  // }
});
Template.listOfRequests.events({

  'submit form': function (event) {
    event.preventDefault();

    var requestId = document.getElementById('reqID').value;
    console.log("requestId in edit request:", requestId);
    var requestId = document.getElementById('reqID').value;
    console.log("requestId: ", requestId);
    Session.set('requestId',requestId);
    Router.go("/editRequest");
  },
    'click .match' : function (event) {
        event.preventDefault();
    //    alert('match this val' + JSON.stringify(this));
    //     alert('form submitted');
      //  console.log('clicked request id' + event.target.requestId.value);

        var request = {};
        //request._id= 'oEsBxoiLvhXHwRJ3G';

      //  alert('form submitted'+button);

          request._id = this._id;
        //alert('request - '+JSON.stringify(request));

        Meteor.call("matchRequestVolunteer", request, function (error, result) {
            console.log("Client : error" + error + "result - " + JSON.stringify(result));
            Session.set("match",result);
            Router.go('/manageRequest');
        });
       // alert('match '+ JSON.stringify(Session.get("match")));
    },

    'click .edit' : function (event) {
        event.preventDefault();
        requestId = this._id;
        console.log("requestId in edit request:", requestId);
        Session.set('requestId',requestId);
        Router.go("/createRequest");
    },


  'click .delete': function(event){
      event.preventDefault();
      console.log("DELETE REQUEST!!!");
      var requestId = this._id;
      console.log("requestId in delete request", requestId);
      Meteor.call("deleteRequest", requestId , function (error, result) {
          console.log("Client : error" + error + "result - " + JSON.stringify(result));
          if (error) {
          console.log("error body", (error));
          sAlert.error(error.reason);
          Router.go("/");
        }
        else{
          console.log("success");
          sAlert.success("Successfully deleted your request.");
          Router.go("/");
        }

      });
      }

});

Template.registerHelper('formatDate', function(date) {
    console.log("format date:!!!!:", moment(date).format('MM-DD-YYYY'));
    return moment(date).format('MM-DD-YYYY');
});
