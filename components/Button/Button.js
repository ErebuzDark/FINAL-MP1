import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';

export default function Button( {setCurrentTempSym, currentTempSym} ) {

  function changeSymbol () {
    if (currentTempSym === 'C') {
      setCurrentTempSym('F');
    }
    else {
      setCurrentTempSym('C');
    }
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={changeSymbol}>
          <View style={styles.button}><Text style={styles.buttonTitle}>Convert to {currentTempSym === 'C' ? '°F' : '°C'}</Text></View>
        </TouchableOpacity>
       </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    padding: 18,
    backgroundColor: 'black',
    borderRadius: 25,
  },
  buttonTitle: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
