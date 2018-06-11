import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/home';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Home', () => {
  it('should mount home component', () => {
    const wrapper = shallow(<Home />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
