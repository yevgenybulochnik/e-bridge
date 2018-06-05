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
  let navClickSpy: Sinon.SinonSpy;
  let clickSpy: Sinon.SinonSpy
  let test_properties: ILeftNavButtonList = {
      isHidden: false,
      onNavToggle: navClickSpy,
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
    navClickSpy = Sinon.spy()
    clickSpy = Sinon.spy()
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

  it('should register a click event on nav toggle')
  it('should register a click event on <LeftNavButtonClick />')

})
