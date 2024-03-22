import React from "react";
import { connect } from "react-redux";
import MobileCompanyClietns from "./MobileCompanyClietns/MobileCompanyClietns";
import MobileCompanyFilters from "./MobileCompanyFilters/MobileCompanyFilters";
import { myEvents } from "../../event";
import {
  client_create,
  client_delete,
  client_update,
} from "../redux/clientsAC";

class MobileCompany extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filterStatus: 0, // 0 - все, 1 - активные - 2 заблокированные
      edit: {
        status: false,
        id: null,
      },
      addClientStatus: false,
      processedClients: [...this.props.clients],
    };
  }

  componentDidMount() {
    myEvents.addListener("EfilteringClients", this.filteringClients);
    myEvents.addListener("EdeleteClient", this.deleteClient);
    myEvents.addListener("EsaveEditClient", this.saveEditClient);
    myEvents.addListener(
      "EcancelEditingOrAddClient",
      this.cancelEditingOrAddClient
    );
    myEvents.addListener("EeditClient", this.editClient);
    myEvents.addListener("EaddClient", this.addClient);
  }

  componentWillUnmount() {
    myEvents.removeListener("EfilteringClients", this.filteringClients);
    myEvents.removeListener("EdeleteClient", this.deleteClient);
    myEvents.removeListener("EsaveEditClient", this.saveEditClient);
    myEvents.removeListener(
      "EcancelEditingOrAddClient",
      this.cancelEditingOrAddClient
    );
    myEvents.removeListener("EeditClient", this.editClient);
    myEvents.removeListener("EaddClient", this.addClient);
  }

  filteringClients = (mode) => {
    if (this.state.filterStatus === mode) return; // прежний фильтр равен текущему => ререндер не надо.
    let updateProcessedClients = [...this.props.clients];
    if (mode === 1) {
      updateProcessedClients = updateProcessedClients.filter(
        (item) => item.balance >= 0
      );
    }
    if (mode === 2) {
      updateProcessedClients = updateProcessedClients.filter(
        (item) => item.balance < 0
      );
    }
    this.setState({
      processedClients: updateProcessedClients,
      filterStatus: mode,
    });
  };

  deleteClient = (id) => {
    this.props.dispatch(client_delete(id));
  };

  saveEditClient = (updateClient) => {
    this.props.dispatch(client_update(updateClient));
    this.setState({
      addClientStatus: false,
      edit: {
        status: false,
        id: null,
      },
    });
  };

  addClient = (newClient) => {
    this.props.dispatch(client_create(newClient));
    this.setState({
      addClientStatus: false,
    });
  };

  cancelEditingOrAddClient = () => {
    this.setState({
      edit: {
        status: false,
        id: null,
      },
      addClientStatus: false,
    });
  };

  editClient = (client) => {
    const updateEdit = {
      status: true,
      id: client.id,
    };

    this.setState({
      edit: updateEdit,
    });
  };

  addClientStatusUpdate = () => {
    const newEmptyClient = {
      balance: 0,
      id: this.props.clients.length,
      name: "",
      patronymic: "",
      surname: "",
    };
    this.props.dispatch(client_create(newEmptyClient));
    this.setState({
      addClientStatus: true,
    });
    this.editClient(newEmptyClient);
  };

  render() {
    console.log("Render Mobile Company Clients Component");
    return (
      <div>
        <MobileCompanyFilters />
        <MobileCompanyClietns
          clients={this.props.clients}
          editedClient={this.state.edit}
          addClientStatus={this.state.addClientStatus}
        />
        <button
          onClick={this.addClientStatusUpdate}
          type="button"
          className="btn btn-secondary btn-add"
        >
          Добавить Клиента
        </button>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    clients: state.clients,
  };
};

export default connect(mapStateToProps)(MobileCompany);
