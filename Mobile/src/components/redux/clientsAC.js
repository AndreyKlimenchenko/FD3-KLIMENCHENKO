const ADD_CLIENT = "ADD_CLIENT";
const UPDATE_CLIENT = "UPDATE_CLIENT";
const DELETE_CLIENT = "DELETE_CLIENT";
const FILTERING_CLIENTS = "FILTERING_CLIENTS";

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

const clients_filter = function (mode) {
  return {
    type: FILTERING_CLIENTS,
    mode,
  };
};

export {
  client_create,
  ADD_CLIENT,
  client_update,
  UPDATE_CLIENT,
  client_delete,
  DELETE_CLIENT,
  clients_filter,
  FILTERING_CLIENTS,
};
