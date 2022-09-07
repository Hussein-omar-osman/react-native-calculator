import * as React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../styles/GlobalStyles';
import { myColors } from '../styles/Colors';
import Button from './Button';

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '*':
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '/':
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <>
      <View style={Styles.row}>
        <Button title='C' isGray onPress={clear} />
        <Button
          title='+/-'
          isGray
          onPress={() => handleOperationPress('+/-')}
        />
        <Button title='％' isGray onPress={() => handleOperationPress('％')} />
        <Button title='÷' isBlue onPress={() => handleOperationPress('/')} />
      </View>
      <View style={Styles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')} />
        <Button title='8' onPress={() => handleNumberPress('8')} />
        <Button title='9' onPress={() => handleNumberPress('9')} />
        <Button title='×' isBlue onPress={() => handleOperationPress('*')} />
      </View>
    </>
  );
}
