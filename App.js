import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from 'react';
import { TouchableOpacity, StyleSheet, View, Platform } from 'react-native';
import { Text } from 'react-native-elements'

import Answer from './components/Answer'
import TableDisplay from './components/TableDisplay'

export default function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [solution, setSolution] = useState(0)
  const [changeNumbers, setChangeNumbers] = useState(1)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  useEffect(()=> {
    // generate some random numbers and solution
    let rando1 = Math.floor(Math.random() * 5) +2
    let rando2 = Math.floor(Math.random() * 5) +2
    setSolution(rando1 * rando2)
    setNum1(rando1)
    setNum2(rando2)
    createAnswers(rando1*rando2)
  }, [changeNumbers])
    
  const handlePress = (isCorrect)=> { 
    //check userPress
    console.log(isCorrect)
    if (isCorrect) {
      setScore(score+10)
      console.log(score)
    }
    setChangeNumbers(changeNumbers + 1)
  }


  const createAnswers = (solution)=> {
    let answerEls= []
    // an array to create alternate solutions
    const possibles = [solution + num1, solution +num2, solution - num1, solution-num2, solution +2, solution -1]
    //the actual solution
    let theSolution = <Answer handlePress={handlePress} value={solution} isCorrect={true} style={[styles.solutions, styles.text]}>{solution}</Answer>
    //push 3 extra answers in
    for (let i=0; i<3; i++) {
      let altSolution = <Answer handlePress={handlePress} value={possibles[Math.floor(Math.random() * 6)]} isCorrect={false} style={[styles.solutions, styles.text]}>{possibles[Math.floor(Math.random() * 6)]}</Answer>
      answerEls.push(altSolution)
    }
    // push the actual solution in
    answerEls.push(theSolution)
    //shuffle the solutions...
    answerEls.sort((a,b)=> .5 - Math.random())
    //setAnswers that are now shuffled
    setAnswers(answerEls)
  }

  return (
    <View style={styles.container}>
      <Text h1 style={styles.text}>Multiplication Game</Text>
      <Text h2  style={styles.text}>Score {score}</Text>
      <View style={styles.equation}>
        <Text h3 style={[styles.numbers,styles.text]}>{num1}</Text>
        <Text h3 style={[styles.numbers,styles.text]}> X </Text>
        <Text h3 style={[styles.numbers,styles.text]}>{num2}</Text>
      </View>
      <View style={styles.answers}>
        {answers}
      </View>
      
      <TableDisplay num1={num1} num2={num2} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS !== 'android' ? 'Papyrus' : 'Roboto',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  equation: {
    flex: 1,
    paddingTop: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F2EADF',
    justifyContent: 'space-around',
    maxHeight: 100,
  },
  answers: {
    flex: 1,
    width: '100%',
    maxHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  numbers: {
    fontSize: 24,
  },
  solutions: {
    fontSize: 24,
    borderBottomWidth: 3,
    borderBottomColor:'#FEB624',
    marginBottom: 0,
    paddingBottom: 0,
  },
});
