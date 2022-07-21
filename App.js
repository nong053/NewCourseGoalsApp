import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  const [enteredGoldText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);


  }
  function addGoalHandler() {
    
    //alert(enteredGoldText);
    //console.log(enteredGoldText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoldText
    ]);

    console.log(enteredGoldText);

  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>

        <TextInput style={styles.textInput}
          placeholder="Your course goal!!"
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
      <View>
     
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
        
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

