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
    const dataItems = [ 'Wonder Twins', 'Thanos' ];
    const wrapper = shallow(<TodoList items={dataItems} />);

    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(dataItems.length);
  });

  it('renders a list item', () => {

    const dataItems = [ 'Wonder Twins' ];
    const wrapper = shallow(<TodoList items={dataItems} />);

    expect(wrapper.contains(<li key='Wonder Twins' className="item">Wonder Twins</li>)).toBeTruthy();


  });

});