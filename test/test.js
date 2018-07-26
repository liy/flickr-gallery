import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Masonry from '../src/components/Masonry';
import ToggleButton from '../src/components/ToggleButton';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

// drity mock
const storeMock = {
  getState: () => {
    return {
      favouritesOnly: true,
      images: [],
    }
  },
  dispatch: () => {},
  subscribe: () => {},
}

// just a naive test
describe('Component test', () => {
  it('Masonry renders', () => {
    const wrapper = shallow(<Masonry images={[]}/>);
    expect(wrapper).toMatchSnapshot();
  })

  // this test is completely pointless, just want to try it out.
  it('Toggle button onClick', () => {
    const onClick = jest.fn();
    const btn = shallow(<ToggleButton onClick={onClick} store={storeMock}/>);
    btn.simulate('click');

    expect(btn).toMatchSnapshot();
    expect(onClick.mock.calls.length).toBe(1);
  })
});