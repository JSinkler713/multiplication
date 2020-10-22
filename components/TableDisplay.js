import React, {useState, useEffect, useContext} from 'react'; 
import { StyleSheet, View, Text, FlatList } from 'react-native';
 
const TableDisplay = ({num1, num2})=> { 
  const [columns, setColumns] = useState(num1)
  const [rows, setRows] = useState(num2)
  
  useEffect(()=> {
    let tempColumns=[]
    let tempRows=[]
    for (let i=0; i< num1; i++) {
      tempColumns.push({key:i +'c'})
    }
    for (let i=0; i< num2; i++) {
      tempRows.push({key:i + 'r'})
    }
    setColumns(tempColumns)
    setRows(tempRows)
  }, [num1, num2])


  return ( 
     <View style={styles.container}> 
       <FlatList
         data={columns}
         keyExtractor={item=>item.key}
         style={styles.column}
         renderItem={({item})=>(
           <View>
           <FlatList
             data={rows}
             style={styles.row}
             keyExtractor={item=>item.key}
             renderItem={({item})=>(
               <View style={styles.singleBox}></View>
             )}
           />
           </View>
         )}
       />
     </View> 
  ) 
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  column: {
    flex:1,
  },
  row: {
    flex:1,
    flexDirection: 'row',
  },
  singleBox: {
    width: 25,
    height: 25,
    backgroundColor: 'blue',
    borderWidth: 3,
    borderColor: 'black',
    margin: 5,  
      
  },
})

export default TableDisplay;
