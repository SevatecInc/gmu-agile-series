import React from 'react';
import { shallow } from '../../enzyme';

import TodoList from './Main';

describe('Todos List Tests', () => {

  it('renders empty-message', () => {

    const dataItems = [];
    const wrapper = shallow(<TodoList items={dataItems} />);

    expect(wrapper.find('.empty-message')).toBeDefined();


  });

  it('renders items', ()=>{
    const dataItems = [ 'Wonder Woman', 'Thanos' ];
    const wrapper = shallow(<TodoList items={dataItems} />);

    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(dataItems.length);
  });

  it('renders a list item', () => {

    const dataItems = [ 'Wonder Woman' ];
    const wrapper = shallow(<TodoList items={dataItems} />);

    expect(wrapper.contains(<li key='Wonder Woman' className="item">Wonder Woman</li>)).toBeTruthy();


  });

});