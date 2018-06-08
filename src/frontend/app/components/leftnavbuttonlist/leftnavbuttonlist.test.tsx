import * as React from 'react';
import * as Mocha from 'mocha';
import * as Chai from 'chai';
import * as Enzyme from 'enzyme';
import * as Sinon from 'sinon';

const expect = Chai.expect

import LeftNavButtonList, { ILeftNavButtonList } from './leftnavbuttonlist';
import LeftNavButton from '../leftnavbutton/leftnavbutton'
const styles = require('./leftnavbuttonlist.sass');

describe('LeftNavButtonList Presentational component', () => {
  let navClickSpy = Sinon.spy();
  let clickSpy = Sinon.spy()
  let test_properties: ILeftNavButtonList = {
      isHidden: false,
      onNavToggle: navClickSpy,
      onButtonClick: clickSpy,
      navButtons: [
        {
          name: 'test button 1',
          isActive: false,
          onClick: clickSpy
        },
        {
          name: 'test button 1',
          isActive: false,
          onClick: clickSpy
        },
        {
          name: 'test button 1',
          isActive: false,
          onClick: clickSpy
        }
      ]
    };
  let wrapper: Enzyme.ReactWrapper

  beforeEach(() => {
    wrapper = Enzyme.mount(<LeftNavButtonList {...test_properties} />)
  })

  it('should render', () => {
    expect(wrapper.exists()).to.be.true
  })

  it('should have class .visible', () => {
    expect(wrapper.children().hasClass(`${styles.visible}`)).to.be.true
  })

  it('should have one toggle button node', () => {
    expect(wrapper.find(`.${styles.toggle}`).length).to.equal(1)
  })

  it(`should have ${test_properties.navButtons.length} <LeftNavButton /> nodes`, () => {
    let nodes = wrapper.find(LeftNavButton)
    expect(nodes.length).to.equal(test_properties.navButtons.length)
    nodes.forEach((node) => {
      expect(node.children().is('button')).to.be.true
    })
  })

  it('should change styles on isHidden property change', () => {
    wrapper.setProps({isHidden: true})
    expect(wrapper.children().hasClass(`${styles.hidden}`)).to.be.true
  })

  it('should register a click event on nav toggle', () => {
    let toggle = wrapper.find(`.${styles.toggle}`)
    toggle.simulate('click')
    expect(navClickSpy.calledOnce).to.be.true
  })

  it('should register a click event on <LeftNavButtonClick />', () => {
    let buttons = wrapper.find(LeftNavButton)
    buttons.forEach((node) => {
      node.simulate('click')
    })
    expect(clickSpy.callCount).to.equal(test_properties.navButtons.length)
  })

})
