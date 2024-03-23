import React from "react";
import { myEvents } from "../../../event";

class Client extends React.PureComponent {
  surnameRef = React.createRef();
  balanceRef = React.createRef();
  nameRef = React.createRef();
  patronymicRef = React.createRef();

  deleteClient = () => {
    myEvents.emit("EdeleteClient", this.props.data.id);
  };

  editClient = () => {
    myEvents.emit("EeditClient", this.props.data);
  };

  saveEditClient = () => {
    const newClient = {
      ...this.props.data,
      surname: this.surnameRef.current.value,
      balance: this.balanceRef.current.value,
    };
    if (this.props.addClientStatus) {
      newClient.name = this.nameRef.current.value;
      newClient.patronymic = this.patronymicRef.current.value;
    }
    myEvents.emit("EsaveEditClient", newClient);
  };

  render() {
    console.log(`${this.props.data.surname} rendering`);
    return (
      <tr>
        <td>
          {this.props.isEditing ? (
            <input
              placeholder="surname"
              defaultValue={this.props.data.surname}
              ref={this.surnameRef}
            />
          ) : (
            this.props.data.surname
          )}
        </td>
        <td>
          {this.props.addClientStatus && this.props.isEditing ? (
            <input ref={this.nameRef} placeholder="name" />
          ) : (
            this.props.data.name
          )}
        </td>
        <td>
          {this.props.addClientStatus && this.props.isEditing ? (
            <input ref={this.patronymicRef} placeholder="middle name" />
          ) : (
            this.props.data.patronymic
          )}
        </td>
        <td>
          {this.props.isEditing ? (
            <input
              defaultValue={this.props.data.balance}
              ref={this.balanceRef}
            />
          ) : (
            this.props.data.balance
          )}
        </td>
        <td>
          {this.props.data.balance >= 0 ? (
            <span>Активный</span>
          ) : (
            <span>Заблокированный</span>
          )}
        </td>
        <td>
          <button
            onClick={
              this.props.isEditing ? this.saveEditClient : this.editClient
            }
            type="button"
            className="btn btn-secondary"
          >
            {this.props.isEditing ? "Сохранить" : "Редактировать"}
          </button>
        </td>
        <td>
          <button
            onClick={this.deleteClient}
            type="button"
            className="btn btn-secondary btn-delete"
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default Client;
