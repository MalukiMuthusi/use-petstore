var OpenApiPetstore = require("open_api_petstore");

var defaultClient = OpenApiPetstore.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
var petstore_auth = defaultClient.authentications["petstore_auth"];
petstore_auth.accessToken = "YOUR ACCESS TOKEN";

var api = new OpenApiPetstore.PetApi();
var pet = new OpenApiPetstore.Pet(); // {Pet} Pet object that needs to be added to the store

let tags = ["tag1"];

api.findPetsByTags(tags).then(
  function (data) {
    console.log("API called successfully. Returned data: ");
    console.log(data);
  },
  function (error) {
    console.error(error);
  }
);

api.getPetById(1).then(
  function (data) {
    console.log("API called successfully. Returned data: ");
    console.log(data);
  },
  function (error) {
    console.error(error);
  }
);
