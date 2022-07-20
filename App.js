import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';


export default function App() {

  const [enteredGoldText, setEnteredGoalText] = useState(''); 
  const [courseGoals,setCourseGoals] = useState('');


  function goalInputHandler(enteredText){
    
    setEnteredGoalText(enteredText);
    

  }
  function addGoalHandler(){
    
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      enteredGoldText,

    ]);
  }
 

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        
        <TextInput style={styles.textInput} 
        placeholder="Your course goal!!" 
        onChange={goalInputHandler}
        />
        <Button 
        title="Add Goal" 
        onPress={addGoalHandler}
        />
      </View>
      <View>
        <Text>Text</Text>
        
        {/* {courseGoals.map((goal)=><Text key={goal}>{goal}</Text>)} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'

  },
  textInput: {
    
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%'
  }
});
