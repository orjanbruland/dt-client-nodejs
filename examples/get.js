var grpc = require('grpc'),
    // Replace with require('dt-client-nodejs')
    dt = require('./../index.js');

var ssl_creds = grpc.credentials.createSsl();
var call_creds = dt.auth.createFromApiKeyCredential('your_apikey_here');
var combined_creds = grpc.credentials.combineChannelCredentials(ssl_creds, call_creds);

var thingClient = new dt.services.ThingServiceClient("api.disruptive-technologies.com:443", combined_creds);
var req = new dt.messages.thing.GetThingRequest();
    req.setThingId("206840711");
thingClient.getThing(req, function (err, resp) {
  if (err) {
      console.log("error:" , err);
    } else {
      console.log(resp.toObject());
    }
})
