import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { myColors } from './styles/Colors';
import { ThemeContext } from './context/ThemeContext';

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
        <Text>Open up App.tsx to start working on your app!</Text>
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
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
