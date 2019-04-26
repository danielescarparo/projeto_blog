import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'; 
import { shallow, configure } from 'enzyme'; 
import {BrowserRouter, Switch, Router} from 'react-router-dom'
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.html()).toMatchSnapshot();
});

