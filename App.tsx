import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { myColors } from './styles/Colors';
import { ThemeContext } from './context/ThemeContext';
import Button from './components/Button';
import Keyboard from './components/KeyBoard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, { backgroundColor: myColors.dark }]
        }
      >
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        {/* <Button isGray title='3' onPress={() => alert('3')} />
        <Button isBlue title='4' onPress={() => alert('4')} />
        <Button title='5' onPress={() => alert('5')} /> */}
        <Keyboard />
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
