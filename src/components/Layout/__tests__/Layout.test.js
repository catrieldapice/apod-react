import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

describe('<Layout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });
  describe('render', () => {
    it('should render something', () => {
      expect(wrapper.isEmptyRender()).toEqual(false);
    });
    it('should have className prop', () => {
      expect(wrapper.prop('className')).toEqual('apod-container');
    });
    it('should render header', () => {
      expect(wrapper.find('header').exists()).toBe(true);
    });
    it('should have header', () => {
      expect(wrapper.find('header').text()).toBe('APOD API in action!');
    });
  });
});
