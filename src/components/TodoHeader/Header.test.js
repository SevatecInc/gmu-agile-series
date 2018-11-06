import React from 'react';
import { shallow, mount } from '../../enzyme';

import TodoHeader from './Header';

describe('Todos Header Tests', () => {

  it('renders header', () => {

    
    const wrapper = shallow(<TodoHeader />);

    console.log(wrapper.debug())

    const elUnderTest = wrapper.find('div.header');

    expect(elUnderTest).toHaveLength(1);


  });


});