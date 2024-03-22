const ADD_CLIENT = "ADD_CLIENT";
const UPDATE_CLIENT = "UPDATE_CLIENT";
const DELETE_CLIENT = "DELETE_CLIENT";

const client_create = function (client) {
  return {
    type: ADD_CLIENT,
    client,
  };
};

const client_update = function (client) {
  return {
    type: UPDATE_CLIENT,
    client,
  };
};

const client_delete = function (clientId) {
  return {
    type: DELETE_CLIENT,
    clientId,
  };
};

export {
  client_create,
  ADD_CLIENT,
  client_update,
  UPDATE_CLIENT,
  client_delete,
  DELETE_CLIENT,
};
