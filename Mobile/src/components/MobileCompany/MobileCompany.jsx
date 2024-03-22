import React from "react";
import MobileCompanyClietns from "./MobileCompanyClietns/MobileCompanyClietns";
import MobileCompanyFilters from "./MobileCompanyFilters/MobileCompanyFilters";
import { myEvents } from '../../event';

class MobileCompany extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            clients: [...this.props.clients],
            filterStatus: 0, // 0 - все, 1 - активные - 2 заблокированные
            edit: {
                status: false,
                id: null
            },
            addClientStatus: false,
            processedClients: [...this.props.clients]
        };
    }
    

    componentDidMount() {
        myEvents.addListener("EfilteringClients", this.filteringClients);
        myEvents.addListener("EdeleteClient", this.deleteClient);
        myEvents.addListener("EsaveEditClient", this.saveEditClient);
        myEvents.addListener("EcancelEditingOrAddClient", this.cancelEditingOrAddClient);
        myEvents.addListener("EeditClient", this.editClient);
        myEvents.addListener("EaddClient", this.addClient);
    }

    componentWillUnmount() {
        myEvents.removeListener("EfilteringClients", this.filteringClients);
        myEvents.removeListener("EdeleteClient", this.deleteClient);
        myEvents.removeListener("EsaveEditClient", this.saveEditClient);
        myEvents.removeListener("EcancelEditingOrAddClient", this.cancelEditingOrAddClient);
        myEvents.removeListener("EeditClient", this.editClient);
        myEvents.removeListener("EaddClient", this.addClient);
    }

    filteringClients = (mode) => {
        if (this.state.filterStatus === mode) return; // прежний фильтр равен текущему => ререндер не надо. 
        let updateProcessedClients = [...this.state.clients];
        if (mode === 1) {
            updateProcessedClients = updateProcessedClients.filter(item => item.balance >= 0)
        }
        if (mode === 2) {
            updateProcessedClients = updateProcessedClients.filter(item => item.balance < 0)
        }
        this.setState({
            processedClients: updateProcessedClients,
            filterStatus: mode
        });
    }

    deleteClient = (id) => {
        this.setState(({ clients, processedClients }) => {
            const idxForClients = clients.findIndex(item => item.id === id);
            const beforeForClients = clients.slice(0, idxForClients);
            const afterForClients = clients.slice(idxForClients + 1);
            const idxForProcessedClients = processedClients.findIndex(item => item.id === id);
            const beforeForProcessedClients = processedClients.slice(0, idxForProcessedClients);
            const afterForProcessedClients = processedClients.slice(idxForProcessedClients + 1);
            return {
                clients: [...beforeForClients, ...afterForClients],
                processedClients: [...beforeForProcessedClients, ...afterForProcessedClients]
            }
        })
    }

    saveEditClient = (updateClient) => {
        this.setState(({ clients, processedClients, edit }) => {
            const idxForClients = clients.findIndex(item => item.id === updateClient.id);
            const beforeForClients = clients.slice(0, idxForClients);
            const afterForClients = clients.slice(idxForClients + 1);
            const idxForProcessedClients = processedClients.findIndex(item => item.id === updateClient.id);
            const beforeForProcessedClients = processedClients.slice(0, idxForProcessedClients);
            const afterForProcessedClients = processedClients.slice(idxForProcessedClients + 1);
            return {
                clients: [...beforeForClients, updateClient, ...afterForClients],
                processedClients: [...beforeForProcessedClients, updateClient, ...afterForProcessedClients],
                edit: {
                    status: false,
                    id: null
                }
            }
        })
    }

    addClient = (newClient) => {
        this.setState(({ clients }) => {
            return {
                clients: [...clients, newClient],
                processedClients: [...clients, newClient],
                addClientStatus: false
            }
        })
    }

    cancelEditingOrAddClient = () => {
        this.setState({
            edit: {
                status: false,
                id: null
            },
            addClientStatus: false
        })
    }

    editClient = (client) => {
        const updateEdit = {
            status: true,
            id: client.id,
        };

        this.setState({
            edit: updateEdit
        });
    }

    addClientStatusUpdate = () => {
        const newEmptyClient = {
            balance: 0,
            id: this.state.clients.length,
            name: "",
            patronymic: "",
            surname: ""
        }
        this.setState(({ processedClients }) => {
            return {
                processedClients: [...processedClients, newEmptyClient],
                addClientStatus: true
            }
        })
        this.editClient(newEmptyClient)
    }

    render() {
        console.log("Render Mobile Company Clients Component", this.state.processedClients);
        return (
            <div>
                <MobileCompanyFilters />
                <MobileCompanyClietns clients={this.state.processedClients} editedClient={this.state.edit} addClientStatus={this.state.addClientStatus} />
                <button onClick={this.addClientStatusUpdate} type="button" className="btn btn-secondary btn-add">Добавить Клиента</button>
            </div>
        )
    }
}

export default MobileCompany;