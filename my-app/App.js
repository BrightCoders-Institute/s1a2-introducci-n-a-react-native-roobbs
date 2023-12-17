import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function Exercise1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  }

  const handleLastNameChange = (text) => {
    setLastName(text);
  }

  const handleReset = () => {
    setFirstName('');
    setLastName('');
  }

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseTitle}>Exercise 1: Form</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={handleFirstNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={handleLastNameChange}
      />
      <Text>Hello, {firstName} {lastName}!</Text>
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
}

function Exercise2() {
  const sayHi = () => {
    const name = prompt('Enter your name:');
    if (name) {
      alert(`Hello, ${name}!`);
    }
  }

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseTitle}>Exercise 2: Greeting</Text>
      <Button title="Greet" onPress={sayHi} />
    </View>
  );
}

function Exercise3() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseTitle}>Exercise 3: Counter</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={incrementCounter} />
    </View>
  );
}

function Exercise4() {
  const [isToggleOn, setToggleOn] = useState(false);

  const toggleState = () => {
    setToggleOn(!isToggleOn);
  }

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseTitle}>Exercise 4: Toggle</Text>
      <Text>{isToggleOn ? 'On' : 'Off'}</Text>
      <Button title="Toggle" onPress={toggleState} />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Exercises</Text>
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
      <StatusBar style="auto" />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseContainer: {
    borderWidth: 1,
    border: '2px solid grey',
    padding: 10,
    margin: 10,
    borderRadius: '10px',
  },
  exerciseTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
  },
});