import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, SafeAreaView, Platform } from 'react-native';
import { myColors } from './styles/Colors';
import { ThemeContext } from './context/ThemeContext';
import Keyboard from './components/KeyBoard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, { backgroundColor: myColors.dark }]
        }
      >
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={Platform.OS === 'android' && { marginTop: 25 }}
        />

        <Keyboard />
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
