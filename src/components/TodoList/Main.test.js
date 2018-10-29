import React from 'react';
import { shallow } from '../../enzyme';

import TodoList from './Main';

describe('Todos List Tests', () => {

  it('renders empty-message', () => {

    const dataItems = [];
    const wrapper = shallow(<TodoList items={dataItems} />);
    const div = wrapper.find('.empty-message');
    
    expect(div).toHaveLength(1);


  });

  it('renders items', ()=>{
    const dataItems = [ 'Wonder Twins', 'Thanos' ];
    const wrapper = shallow(<TodoList items={dataItems} />);

    console.log(wrapper.debug())
    expect(wrapper.find('.list-items')).toHaveLength(1);
    expect(wrapper.find('.item')).toHaveLength(dataItems.length);
  });

  it('renders a list item', () => {

    const dataItems = [ 'Wonder Twins' ];
    const wrapper = shallow(<TodoList items={dataItems} />);

    expect(wrapper.contains(<li key='Wonder Twins' className="item">Wonder Twins</li>)).toBeTruthy();


  });

});