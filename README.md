# dt-client-nodejs - grpc node.js client for DT

## Installation

```console
npm install --save https://github.com/disruptive-technologies/dt-client-nodejs
```

## Documentation

See the website at https://docs.disruptive-technologies.com/.

## Usage

```js
// Load dependencies
var dt = require('dt-client-nodejs'),
    grpc = require('grpc');

// Create a GRPC client.
var credentials = grpc.credentials.combineChannelCredentials(
  grpc.credentials.createSsl(),
  dt.auth.createFromApiKeyCredential('your_apikey_here')
);
var client = new dt.services.ThingServiceClient("api.disruptive-technologies.com:443", credentials);

// Fetch a Thing object by its address.
var req = new dt.messages.thing.GetThingRequest();
req.setThingId("thing-address");
client.getThing(req, function (err, resp) {
  if (err) {
      console.log("error:" , err);
    } else {
      console.log(resp.toObject());
    }
})
```
