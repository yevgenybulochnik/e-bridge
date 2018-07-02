import * as React from 'react';
import * as Mocha from 'mocha';
import * as Chai from 'chai';
import * as Enzyme from 'enzyme';
import * as Sinon from 'sinon';

const expect = Chai.expect

import LeftNavButton, { ILeftNavButtonProps } from './leftnavbutton'
const styles = require('./leftnavbutton.sass')

describe('LeftNavButton Presentational component', () => {

  let clickSpy: Sinon.SinonSpy;
  let test_properties: ILeftNavButtonProps;
  let wrapper: Enzyme.ShallowWrapper;

  beforeEach(() => {
    clickSpy = Sinon.spy();

    test_properties = {
      name: 'Test Button',
      isActive: false,
      onClick: clickSpy,
      path: '/test'
    } as ILeftNavButtonProps;

    wrapper = Enzyme.shallow(<LeftNavButton {...test_properties} />);
  });

  it('should render', () => {
    expect(wrapper.exists()).to.be.true;
  });

  it('should have text from name prop', () => {
    expect(wrapper.text()).to.equal('Test Button')
  })

  it('should be a button element', () => {
    expect(wrapper.type()).to.equal('button')
  })

  it('should have class .inactive', () => {
    expect(wrapper.hasClass(`${styles.inactive}`)).to.be.true
  })

  it('should change styles when isActive is true', () => {
    wrapper.setProps({isActive: true})
    expect(wrapper.hasClass(`${styles.active}`)).to.be.true
  })

  it('should register a click event', () => {
    wrapper.simulate('click')
    expect(clickSpy.calledOnce).to.be.true
  })

})
