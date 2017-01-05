var grpc = require('grpc'),
    // Replace with require('dt-client-nodejs')
    dt = require('./../index.js');

var ssl_creds = grpc.credentials.createSsl();
var call_creds = dt.auth.createFromApiKeyCredential('your_apikey_here');
var combined_creds = grpc.credentials.combineChannelCredentials(ssl_creds, call_creds);

var thingClient = new dt.services.ThingServiceClient("api.disruptive-technologies.com:443", combined_creds);

thingClient.listThings(new dt.messages.thing.ListThingsRequest(), function (err, resp) {
  if (err) {
    console.log("error:" , err);
  } else {
    var things = resp.getThingsList();
    for (var thing in things) {
      console.log(thing, things[thing].toObject());
    }
  }
});
