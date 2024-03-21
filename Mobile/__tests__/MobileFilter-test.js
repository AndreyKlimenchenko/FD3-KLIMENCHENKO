import React from 'react';
import renderer from 'react-test-renderer';

import MobileFilter from '../components/MobileFilter/MobileFilter';

test('работа MobileFilter', () => {

    const component = renderer.create(
        <MobileFilter />
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonFilterAll = component.root.findByProps({ className: "FilterAll" })
    const buttonFilterActive = component.root.findByProps({ className: "FilterActive" })
    const buttonFilterBlocked = component.root.findByProps({ className: "FilterBlocked" })

    // и "нажмём" на неё
    buttonFilterAll.props.onClick();
    buttonFilterActive.props.onClick();
    buttonFilterBlocked.props.onClick();
    // получаем уже изменённый снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // "нажмём" кнопку ещё раз
    buttonFilterAll.props.onClick();
    buttonFilterActive.props.onClick();
    buttonFilterBlocked.props.onClick();

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