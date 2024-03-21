import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient/MobileClient';

test('работа MobileClient', () => {

    const client = { id: 101, FIO: { fam: "Иванов", im: "Иван", otch: "Иванович" }, balance: 200 };

    const component = renderer.create(
        <MobileClient client={client} />
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonEdit = component.root.findByProps({ className: "MobileClient-Edit" })
    const buttonDelete = component.root.findByProps({ className: "MobileClient-Delete" })

    // и "нажмём" на неё
    buttonEdit.props.onClick();
    buttonDelete.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // "нажмём" кнопку ещё раз
    buttonEdit.props.onClick();
    buttonDelete.props.onClick();

    // и получаем окончательный снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    /*
    // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
    wrapper.find('select').simulate('change', {
        target: { value: "hello" },
    });
    */

});