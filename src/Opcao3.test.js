import React from 'react';
import ReactDOM from 'react-dom';
import Opcao3 from './Opcao3';
import Adapter from 'enzyme-adapter-react-16'; 
import { shallow, configure } from 'enzyme'; 
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<Opcao3/>);
  expect(wrapper.html()).toMatchSnapshot();
});

