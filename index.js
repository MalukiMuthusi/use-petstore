var OpenApiPetstore = require("open_api_petstore");

var api = new OpenApiPetstore.AnotherFakeApi();
var client = new OpenApiPetstore.Client(); // {Client} client model
api.call123testSpecialTags(client).then(
  function (data) {
    console.log("API called successfully. Returned data: " + data);
  },
  function (error) {
    console.error(error);
  }
);
