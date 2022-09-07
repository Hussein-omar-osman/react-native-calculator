import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <View
      style={
        theme === 'light'
          ? styles.container
          : [styles.container, { backgroundColor: 'black' }]
      }
    >
      <Text>Open up App.tsx to start working on your app!</Text>
      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
