import {createElement, Component} from 'rax';
import renderer from 'rax-test-renderer';
import DatePicker from '..';

describe('DatePicker', () => {
  it('should render DatePicker', () => {
    const tree = renderer.create(
      <DatePicker
        selectedValue={'2000-01-01'}
        minimumDate={'2000-01-01'}
        maximumDate={'2001-01-01'}
        onDateChange={(date) => {
          console.log('组件date', date);
        }} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});