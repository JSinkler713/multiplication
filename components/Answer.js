import React, {useState, useEffect, useContext} from 'react'; 
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
 
const Answer = ({value, isCorrect, handlePress})=> { 
  return ( 
    <TouchableOpacity onPress={()=>handlePress(isCorrect)}> 
       <Text style={styles.solutions}>{value}</Text>
     </TouchableOpacity> 
  ) 
} 

const styles = StyleSheet.create({
  solutions: {
    fontSize: 24,
    borderBottomWidth: 8,
    borderBottomColor:'blue',
    marginBottom: 5,
    paddingBottom: 5,
  },
})

export default Answer;
