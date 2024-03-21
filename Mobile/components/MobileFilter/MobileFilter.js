import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from '../../events';


class MobileFilter extends React.PureComponent {

    render() {
        console.log("MobileFilter render");

        return (
            <div className='Filter'>
                <button className='FilterAll' onClick={() => mobileEvents.emit('EFilterAll')}>Все</button>
                <button className='FilterActive' onClick={() => mobileEvents.emit('EFilterActive')}>Активные</button>
                <button className='FilterBlocked' onClick={() => mobileEvents.emit('EFilterBlocked')}>Заблокированные</button>
            </div>
        )
    }
}

export default MobileFilter;
