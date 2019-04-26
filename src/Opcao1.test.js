import React from 'react';
import ReactDOM from 'react-dom';
import Opcao1 from './Opcao1';
import Adapter from 'enzyme-adapter-react-16'; 
import { shallow, configure } from 'enzyme'; 
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<Opcao1/>);
  expect(wrapper.html()).toMatchSnapshot();
});

