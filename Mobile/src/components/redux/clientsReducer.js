import {
  ADD_CLIENT,
  DELETE_CLIENT,
  FILTERING_CLIENTS,
  UPDATE_CLIENT,
} from "./clientsAC";

const defaultClients = [
  {
    id: 0,
    name: "Иван",
    surname: "Иванов",
    patronymic: "Иванович",
    balance: 200,
  },
  {
    id: 1,
    name: "Сидор",
    surname: "Сидоров",
    patronymic: "Сидорович",
    balance: 250,
  },
  {
    id: 2,
    name: "Петр",
    surname: "Петров",
    patronymic: "Петрович",
    balance: -200,
  },
];
const initState = {
  clients: [...defaultClients],
  processedClients: [...defaultClients],
  filterStatus: 0,
};

function clientsReducer(state = initState, action) {
  switch (action.type) {
    case ADD_CLIENT: {
      // создаем нового клиента
      let newState = {
        ...state,
        clients: [...state.clients, action.client],
        processedClients: [...state.clients, action.client],
      };
      console.log("state после обработки редьюсером:", newState);
      return newState;
    }

    case DELETE_CLIENT: {
      let newState = {
        ...state,
        clients: state.clients.filter((item) => item.id !== action.clientId),
        processedClients: state.clients.filter(
          (item) => item.id !== action.clientId
        ),
      };
      console.log("state после обработки редьюсером:", newState);
      return newState;
    }

    case UPDATE_CLIENT: {
      let newState = {
        ...state,
        clients: state.clients.map((item) => {
          if (item.id === action.client.id) {
            return action.client;
          }
          return item;
        }),
        processedClients: state.clients.map((item) => {
          if (item.id === action.client.id) {
            return action.client;
          }
          return item;
        }),
      };
      console.log("state после обработки редьюсером:", newState);
      return newState;
    }

    case FILTERING_CLIENTS: {
      let updateProcessedClients = [...state.clients];
      if (action.mode === 1) {
        updateProcessedClients = updateProcessedClients.filter(
          (item) => item.balance >= 0
        );
      }
      if (action.mode === 2) {
        updateProcessedClients = updateProcessedClients.filter(
          (item) => item.balance < 0
        );
      }
      let newState = { ...state, processedClients: [...updateProcessedClients], filterStatus: action.mode };
      console.log("state после обработки редьюсером:", newState);
      return newState;
    }

    default:
      return state;
  }
}

export default clientsReducer;
