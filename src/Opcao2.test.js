import React from 'react';
import Opcao2 from './Opcao2';
import Adapter from 'enzyme-adapter-react-16';
import {NavLink as Link} from 'react-router-dom'
import { shallow, configure } from 'enzyme'; 
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<Opcao2/>);
  expect(wrapper.html()).toMatchSnapshot();
});

it ('contar quantos links existem', () => {
  const wrapper = shallow(<Opcao2/>);

  expect(wrapper.find(Link)).toHaveLength(20);
});

it ('contar se existe um botao', () => {
  const wrapper = shallow(<Opcao2/>);

  expect(wrapper.find('button')).toHaveLength(1);
});