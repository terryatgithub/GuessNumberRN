/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  Alert
} from 'react-native';
 

declare const global: {HermesInternal: null | {}};

let number = Math.round(Math.random() * 100)
let count = 0;
const App = () => {
  
  const [text, setText] = useState('')
  function doGuess() {
    count ++ 
    const numberValue = parseInt(text)
    if(numberValue === number) {
      Alert.alert(`Right! total ${count} times used.`)
      initNumber() // start next round
    } else if(numberValue < number) {
      Alert.alert('too small')
    } else {
      Alert.alert('too large')
    }
  }
  function initNumber() {
    number = Math.round(Math.random() * 100)
    count = 0
  }
  
  useEffect(() => {
    initNumber()
    console.warn(number);
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput style={styles.input} value={text} onChangeText={setText}></TextInput>
        <Button title="猜" onPress={doGuess}></Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 30,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
  }
});

export default App;