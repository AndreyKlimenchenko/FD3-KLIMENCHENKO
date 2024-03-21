import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from '../../events';


import('./MobileForm.css');



class MobileForm extends React.PureComponent {

    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            FIO: PropTypes.shape({
                fam: PropTypes.string.isRequired,
                im: PropTypes.string.isRequired,
                otch: PropTypes.string.isRequired,
            }),
            balance: PropTypes.number.isRequired,
        }),
        isEditMode: PropTypes.bool.isRequired,
    };


    constructor(props) {
        super(props);
        this.famEl = React.createRef();
        this.imEl = React.createRef();
        this.otchEl = React.createRef();
        this.balanceEl = React.createRef();
    }


    save = (EO) => {
        const elem = {
            id: this.props.client.id,
            FIO: {
                fam: this.famEl.current ? this.famEl.current.value : this.props.client.FIO.fam,
                im: this.imEl.current ? this.imEl.current.value : this.props.client.FIO.im,
                otch: this.otchEl.current ? this.otchEl.current.value : this.props.client.FIO.otch,
            },
            balance: +this.balanceEl.current ? +this.balanceEl.current.value : this.props.client.balance,
        }

        mobileEvents.emit('ESaveClient', elem);
    }

    create = () => {
        mobileEvents.emit('ECreate');
    }

    cancel = () => {
        mobileEvents.emit('ECancel');
    }


    render() {

        console.log('MobileForm render')

        if (this.props.isEditMode) {
            return (
                <div className='MobileForm' >
                    <div>
                        <span>Фамилия</span>
                        <input ref={this.famEl} type="text" defaultValue={this.props.client.FIO.fam} />
                    </div>
                    <div>
                        <span>Имя</span>
                        <input ref={this.imEl} type="text" defaultValue={this.props.client.FIO.im} />
                    </div>
                    <div>
                        <span>Отчество</span>
                        <input ref={this.otchEl} type="text" defaultValue={this.props.client.FIO.otch} />
                    </div>
                    <div>
                        <span>Баланс</span>
                        <input ref={this.balanceEl} type="number" defaultValue={this.props.client.balance} />
                    </div>
                    <button className='MobileForm-Save' onClick={this.save}>Сохранить</button>
                    <button className='MobileForm-Cancel' onClick={this.cancel}>Отмена</button>
                </div>
            )
        } else {
            return (
                <button className='MobileForm-Create' onClick={this.create}>
                    Создать
                </button>
            )
        }
    }
}

export default MobileForm;
