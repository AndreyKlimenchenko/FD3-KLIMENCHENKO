import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from '../../events';

import('./MobileClient.css');

class MobileClient extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      FIO: PropTypes.shape({
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
      }),
      balance: PropTypes.number.isRequired,
    })
  };

  state = {
    ...this.props.client
  };

  componentDidUpdate = (prevProps) => {
    const isNewProps = this.props.client.id !== prevProps.client.id ||
      this.props.client.balance !== prevProps.client.balance ||
      this.props.client.FIO.fam !== prevProps.client.FIO.fam ||
      this.props.client.FIO.im !== prevProps.client.FIO.im ||
      this.props.client.FIO.otch !== prevProps.client.FIO.otch;

    if (isNewProps) {
      this.setState({
        ...this.props.client,
        FIO: {
          ...this.props.client.FIO
        },
      });
    }
  };


  delete = (EO) => {
    mobileEvents.emit('EDelete', this.state.id);
  }

  edit = () => {
    mobileEvents.emit('EEdit', this.state);
  }

  render() {

    console.log("MobileClient id=" + this.props.client.id + " render");

    const isActive = this.state.balance > 0;

    return (
      <tr>
        <td>{this.state.FIO.fam}</td>
        <td>{this.state.FIO.im}</td>
        <td>{this.state.FIO.otch}</td>
        <td>{this.state.balance}</td>
        <td style={{ backgroundColor: isActive ? 'chartreuse' : 'red' }} >
          {isActive ? 'Active' : 'Blocked'}
        </td>
        <td><button className='MobileClient-Edit' onClick={this.edit} >Редактировать</button></td>
        <td><button className='MobileClient-Delete' onClick={this.delete}>Удалить</button></td>
      </tr>
    )
  }
}

export default MobileClient;
