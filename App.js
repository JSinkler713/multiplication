import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [solution, setSolution] = useState(0)
  const [changeNumbers, setChangeNumbers] = useState(1)

  useEffect(()=> {
    let rando1 = Math.floor(Math.random() * 13)
    let rando2 = Math.floor(Math.random() * 13)
    setSolution(rando1 * rando2)
    setNum1(rando1)
    setNum2(rando2)
  }, [changeNumbers])
    
  const handlePress = (e)=> { 
    console.log('the target was')
    console.log(e.target)
    setChangeNumbers(changeNumbers + 1)
  }

  return (
    <View style={styles.container}>
      <Text >Multiplication Game</Text>
      <View style={styles.equation}>
        <Text style={styles.numbers} >{num1}</Text>
        <Text style={styles.numbers}> X </Text>
        <Text style={styles.numbers}>{num2}</Text>
      </View>
      <TouchableOpacity style={styles.answers} onPress={handlePress}>
        <View style={styles.answers}>
          <Text value={solution} style={styles.solutions}>{solution}</Text>
          <Text value={solution +num1} style={styles.solutions}>{solution + num1}</Text>
          <Text style={styles.solutions}>{solution - num2}</Text>
          <Text style={styles.solutions}>{solution*2}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    height:500,
  },
  equation: {
    flex: 1,
    paddingTop: 200,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F2EADF',
    justifyContent: 'space-around',
  },
  answers: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  numbers: {
    fontSize: 24,
  },
  solutions: {
    fontSize: 24,
    height: 38,
    borderBottomWidth: 3,
    borderBottomColor:'#FEB624',
    marginBottom: 0,
    paddingBottom: 0,
  },
});
