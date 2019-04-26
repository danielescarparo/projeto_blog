import React from 'react';
import ReactDOM from 'react-dom';
import Opcao2 from './Opcao2';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter, Switch, Router} from 'react-router-dom' 
import { shallow, configure } from 'enzyme'; 
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<BrowserRouter><Opcao2/></BrowserRouter>);
  expect(wrapper.html()).toMatchSnapshot();
});

