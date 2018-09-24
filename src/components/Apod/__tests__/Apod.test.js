import React from 'react';
import { shallow } from 'enzyme';
import Apod from '../Apod';

describe('<Apod />', () => {
  let wrapper, img, text;
  beforeEach(() => {
    wrapper = shallow(<Apod url={'123'} explanation={'asd'} />);

    img = wrapper.find('img');
    text = wrapper.find('p');
  });
  describe('render', () => {
    it('should render something', () => {
      expect(wrapper.isEmptyRender()).toEqual(false);
    });
    it('should have src prop', () => {
      expect(img.prop('src')).toEqual('123');
    });
    it('should have src prop', () => {
      expect(text.text()).toBe(' asd ');
    });
  });
});
