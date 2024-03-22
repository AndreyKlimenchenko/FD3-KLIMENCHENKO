import React from "react";
import { myEvents } from '../../../../event';

class Client extends React.PureComponent {

    editedClientNameRef = React.createRef();
    editedClientBalanceRef = React.createRef();

    deleteClient = () => {
        myEvents.emit('EdeleteClient', this.props.data.id);
    }

    editClient = () => {
        myEvents.emit('EeditClient', this.props.data);
    }

    saveEditClient = () => {
        myEvents.emit('EsaveEditClient', {...this.props.data, surname: this.editedClientNameRef.current.value, balance: this.editedClientBalanceRef.current.value });
    }

    render() {
        console.log("Client component Render")
        return (
            <tr>
                <td>{
                    this.props.isEditing ? <input defaultValue={this.props.data.surname} ref={this.editedClientNameRef}/> : this.props.data.surname}
                </td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.patronymic}</td>
                <td>{this.props.isEditing ? <input defaultValue={this.props.data.balance} ref={this.editedClientBalanceRef} /> : this.props.data.balance}</td>
                <td>
                    {
                        this.props.data.balance >= 0 ? <span>Активный</span> : <span>Заблокированный</span>
                    }
                </td>
                <td><button onClick={this.props.isEditing ? this.saveEditClient : this.editClient} type="button" className="btn btn-secondary">{this.props.isEditing ? "Сохранить" : "Редактировать"}</button></td>
                <td><button onClick={this.deleteClient} type="button" className="btn btn-secondary btn-delete">Удалить</button></td>
            </tr>
        )
    }
}

export default Client;

