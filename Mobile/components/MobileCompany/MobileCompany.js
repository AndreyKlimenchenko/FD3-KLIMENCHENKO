import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from '../../events';


import MobileClient from '../MobileClient/MobileClient';
import MobileForm from '../MobileForm/MobileForm';
import MobileFilter from '../MobileFilter/MobileFilter';


import('./MobileCompany.css');


const defaultClient = {
  id: 1,
  FIO: {
    fam: '',
    im: '',
    otch: '',
  },
  balance: 0,
}

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        FIO: PropTypes.shape({
          fam: PropTypes.string.isRequired,
          im: PropTypes.string.isRequired,
          otch: PropTypes.string.isRequired,
        }),
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    status: 0,
    editClient: defaultClient,
    isEditMode: false,
  };

  setName1 = () => {
    this.setState({ name: 'МТС' });
  };

  setName2 = () => {
    this.setState({ name: 'A1' });
  };

  newId = () => {
    const clients = this.state.clients;
    const max = clients.reduce((acc, curr) => acc.id > curr.id ? acc.id : curr.id);
    return max + 1;
  }


  componentDidMount = () => {
    mobileEvents.addListener('EDelete', this.delete);
    mobileEvents.addListener('EEdit', this.edit);
    mobileEvents.addListener('ECreate', this.create);
    mobileEvents.addListener('ESaveClient', this.save);
    mobileEvents.addListener('ECancel', this.cancel);

    mobileEvents.addListener('EFilterAll', this.filterAll);
    mobileEvents.addListener('EFilterActive', this.filterActive);
    mobileEvents.addListener('EFilterBlocked', this.filterBlocked);

  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('EDelete', this.delete);
    mobileEvents.removeListener('EEdit', this.edit);
    mobileEvents.removeListener('ECreate', this.create);
    mobileEvents.removeListener('ESaveClient', this.save);
    mobileEvents.removeListener('ECancel', this.cancel);

    mobileEvents.removeListener('EFilterAll', this.filterAll);
    mobileEvents.removeListener('EFilterActive', this.filterActive);
    mobileEvents.removeListener('EFilterBlocked', this.filterBlocked);
  };

  edit = (client) => {
    this.setState({
      editClient: client,
      isEditMode: true,
    })
  }

  delete = (id) => {
    const newclients = this.state.clients.filter((client) => {
      return client.id !== id;
    })
    this.setState({ clients: newclients })
  }

  create = () => {
    this.setState({
      editClient: defaultClient,
      isEditMode: true,
    })
  }

  cancel = () => {
    this.setState({
      isEditMode: false,
    })
  }


  save = (client) => {
    this.setState({ isEditMode: false })
    const isOldClients = this.state.clients.some((el) => el.id === client.id);

    if (!isOldClients) {
      this.setState(prev => ({ clients: [...prev.clients, { ...client, id: this.newId() }] }))

    } else {
      const newClientsArr = this.state.clients.map((e) => e.id === client.id ? client : e)
      this.setState({ clients: [...newClientsArr] })
    }
  }

  filterAll = () => this.setState({ status: 0 })
  filterActive = () => this.setState({ status: 1 })
  filterBlocked = () => this.setState({ status: 2 })

  render() {

    console.log("MobileCompany render");

    const filteredClients = this.state.clients.filter((client) => {
      switch (this.state.status) {
        case 1: return client.balance > 0;
        case 2: return client.balance < 0;
        default: return true;
      }
    })

    const clientsCode = filteredClients.map(client => {
      return <MobileClient key={client.id} client={client} />;
    });

    return (
      <div>
        {/* <input type="button" value="МТС" onClick={this.setName1} />
        <input type="button" value="A1" onClick={this.setName2} /> */}
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <MobileFilter />
        <table className='MobileCompanyClients'>
          <thead>
            <tr>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Баланс</td>
              <td>Статус</td>
              <td>Редактировать</td>
              <td>Удалить</td>
            </tr>
          </thead>
          <tbody>
            {clientsCode}
          </tbody>
        </table>
        <MobileForm
          client={this.state.editClient}
          isEditMode={this.state.isEditMode}
        />
      </div >
    );

  }

}

export default MobileCompany;
