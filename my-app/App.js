import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  function sayHi() {
    const nombre = prompt('Ingresa tu nombre:');
    if (nombre) {
      alert(`Hola, ${nombre}!`);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <h2>Como usar React</h2>
      <button onClick={sayHi}>Greet</button>
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
    color: 'blue',
  },
});

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const mostrarMensaje = () => {
    const nombre = prompt('Ingresa tu nombre:');
    if (nombre) {
      alert(`Hola, ${nombre}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Button title="Mostrar Mensaje" onPress={mostrarMensaje} />
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
});
*/