import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  const [result, setResult] = React.useState(0)

  const resultGen = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  const diceValue = () => {
    setResult(resultGen())
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Roll Dice</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{result}</Text>
          <TouchableOpacity style={styles.button} onPress={diceValue}>
            <Text style={styles.buttonText}>Roll Dice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    top: 20
  },
  resultContainer: {
    alignItems: 'center',
  },
  result: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
