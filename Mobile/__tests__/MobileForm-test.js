import React from 'react';
import renderer from 'react-test-renderer';

import MobileForm from '../components/MobileForm/MobileForm';

test('работа MobileForm', () => {

    const client = { id: 101, FIO: { fam: "Иванов", im: "Иван", otch: "Иванович" }, balance: 200 };

    const componentActive = renderer.create(
        <MobileForm
            client={client}
            isEditMode={true}
        />
    );

    const componentPassive = renderer.create(
        <MobileForm
            client={client}
            isEditMode={false}
        />
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTreeActive = componentActive.toJSON();
    expect(componentTreeActive).toMatchSnapshot();

    let componentTreePassive = componentPassive.toJSON();
    expect(componentTreePassive).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonSave = componentActive.root.findByProps({ className: "MobileForm-Save" })
    const buttonCancel = componentActive.root.findByProps({ className: "MobileForm-Cancel" })

    const buttonCreate = componentPassive.root.findByProps({ className: "MobileForm-Create" })

    // и "нажмём" на неё
    buttonSave.props.onClick();
    buttonCancel.props.onClick();

    buttonCreate.props.onClick();

    // получаем уже изменённый снэпшот
    componentTreeActive = componentActive.toJSON();
    expect(componentTreeActive).toMatchSnapshot();

    componentTreePassive = componentPassive.toJSON();
    expect(componentTreePassive).toMatchSnapshot();
    // "нажмём" кнопку ещё раз
    buttonSave.props.onClick();
    buttonCancel.props.onClick();

    buttonCreate.props.onClick();

    // и получаем окончательный снэпшот
    componentTreeActive = componentActive.toJSON();
    expect(componentTreeActive).toMatchSnapshot();

    componentTreePassive = componentPassive.toJSON();
    expect(componentTreePassive).toMatchSnapshot();
    /*
    // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
    wrapper.find('select').simulate('change', {
        target: { value: "hello" },
    });
    */

});