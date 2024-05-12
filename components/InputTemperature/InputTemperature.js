import { Text, View,StyleSheet, TextInput} from 'react-native';

export default function Input({ currentTempSym, setTemperature }) {

  const handleChangeValue = (value) => {
      setTemperature(value);
  };

  return (
      <View style={styles.container}>
        <TextInput style={styles.inputField} placeholder="Input temperature" keyboardType="numeric" onChangeText={handleChangeValue}></TextInput>
        <Text style={styles.tempSymbol}>{currentTempSym === 'C' ? '°C' : '°F'}</Text>
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    borderRadius: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
},
  inputField: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    margin: 8,
    borderRadius: 24,
  },
  tempSymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: 'black'
  },
});
