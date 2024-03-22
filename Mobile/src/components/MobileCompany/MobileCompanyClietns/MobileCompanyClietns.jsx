import React from "react";
import MobileClient from "./MobileClient";

class MobileCompanyClietns extends React.PureComponent {
  render() {
    console.log("Render MobileCompanyClietns Component");
    const clients = this.props.clients.map((item) => (
      <MobileClient
        key={item.id}
        data={item}
        isEditing={this.props.editedClient.id === item.id}
        addClientStatus={this.props.addClientStatus}
      />
    ));
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
              <th scope="col">Отчество</th>
              <th scope="col">Баланс</th>
              <th scope="col">Статус</th>
              <th scope="col">Редактировать</th>
              <th scope="col">Удалить</th>
            </tr>
          </thead>
          <tbody>{clients}</tbody>
        </table>
      </div>
    );
  }
}

export default MobileCompanyClietns;
