var grpc = require('grpc'),
     dt = require('dt-client-nodejs');

var ssl_creds = grpc.credentials.createSsl();
var call_creds = dt.auth.createFromApiKeyCredential('your_apikey_here');
var combined_creds = grpc.credentials.combineChannelCredentials(ssl_creds, call_creds);
var client = new dt.services.ThingServiceClient("api.disruptive-technologies.com:443", combined_creds);
var streamReq = new dt.messages.thing.WatchRequest();
var stream = client.watch(streamReq);
stream.on('data', function (resp) {
  console.log("stream data:", resp.toObject());
});
stream.on('end', function () {
  console.log("stream end");
});
stream.on('status', function (status) {
  console.log("status: ", status);
});
