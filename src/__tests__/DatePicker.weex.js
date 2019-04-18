import {createElement} from 'rax';
import renderer from 'rax-test-renderer';
import DatePicker from '..';

jest.mock('universal-env', () => {
  return {
    isWeex: true
  };
});

describe('Picker in weex', () => {
  it('render tag Picker', () => {
    const component = renderer.create(
      <DatePicker
        selectedValue={'2000-01-01'}
        minimumDate={'2000-01-01'}
        maximumDate={'2001-01-01'}
        onDateChange={(date) => {
        }} />
    );
    let tree = component.toJSON();
    expect(tree.children[0].tagName).toEqual('SPAN');
  });
});
