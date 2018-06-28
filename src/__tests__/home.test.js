import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/home';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('Home', () => {
  it('should mount home component', () => {
    const wrapper = shallow(<Home />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it("should click create blog post link", () => {
    const wrapper = shallow(<Home />)
    const card = wrapper.find('Columns').find('Box').first().find('Card')
    const component = renderer.create(card.props().link)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.props.onClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it("should click sample table link", () => {
    const wrapper = shallow(<Home />)
    const card = wrapper.find('Columns').find('Box').at(2).find('Card')
    const component = renderer.create(card.props().link)
    let tree = component.toJSON();
    tree.props.onClick();
    expect(tree).toMatchSnapshot();
  })

  it("should click posts feed link", () => {
    const wrapper = shallow(<Home />)
    const card = wrapper.find('Columns').find('Box').at(1).find('Card')
    const component = renderer.create(card.props().link)
    let tree = component.toJSON();
    tree.props.onClick();
    expect(tree).toMatchSnapshot();
  })
})
