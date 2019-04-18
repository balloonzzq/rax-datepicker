import {Component, createElement} from 'rax';
import {isWeex} from 'universal-env';
import Text from 'rax-text';
import View from 'rax-view';

const styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  }
};

function DatePicker(props) {
  const {
    selectedValue,
    minimumDate,
    maximumDate,
    onDateChange,
    style,
  } = props;

  let touchableStyle = {
    ...styles.initial,
    ...style,
  };
  let textStyle = {
    color: touchableStyle.color,
    fontSize: touchableStyle.fontSize,
    fontStyle: touchableStyle.fontStyle,
    fontWeight: touchableStyle.fontWeight,
    textAlign: touchableStyle.textAlign,
    textDecoration: touchableStyle.textDecoration,
    textOverflow: touchableStyle.textOverflow,
    lineHeight: touchableStyle.lineHeight
  };

  function handleClick() {
    if (isWeex) {
      const picker = __weex_require__('@weex-module/picker');

      picker.pickDate({
        value: selectedValue,
        max: maximumDate,
        min: minimumDate,
      }, event => {
        if (event.result === 'success') {
          onDateChange && onDateChange(event.data);
        }
      });
    }
  }

  if (isWeex) {
    return (
      <View {...this.props} onClick={handleClick} style={touchableStyle}>
        <Text style={textStyle}>
          {selectedValue}
        </Text>
      </View>
    );
  } else {
    return (
      <input
        type={'date'}
        value={selectedValue}
        defaultValue={selectedValue}
        min={minimumDate}
        max={maximumDate}
        onChange={(e) => {
          onDateChange && onDateChange(e.target.value);
        }}
        style={style} />
    );
  }
}

export default DatePicker;
