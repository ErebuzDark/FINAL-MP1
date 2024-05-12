import { Text, View,SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';


import Button from './components/Button/Button';
import InputTemperature from './components/InputTemperature/InputTemperature'
import DisplayElement from './components/TemperatureDisplay/TemperatureDisplay';

const { height: screenHeight } = Dimensions.get('window');

export default function App() {
  const [currentTempSym, setCurrentTempSym] = useState('C');
  const [temperature, setTemperature] = useState('');
  const [conversion, setConversion] = useState('');
  const [colorMood, setColorMood] = useState(['#e3d61b', '#c45923'])
  const [display, setDiplasy] = useState('snow');

  useEffect(() => {
    if (currentTempSym === 'C') {
      if (temperature !== '') {
        let convert = temperature * 1.8 + 32;
        console.log(convert);
        if (!isNaN(convert)) {
          setConversion(convert.toFixed(1));
        }
      }
      if (temperature === '' || temperature <= 0) {
        setColorMood(['#a1f6ff', '#103fad']);
        setDiplasy('snow')
      }
      else {
        setColorMood(['#e3d61b', '#c45923']);
        setDiplasy('sun')
      }
    }
    else if (currentTempSym === 'F'){
      let convert = (temperature - 32) * 5/9;
        if (!isNaN(convert)) {
          setConversion(convert.toFixed(1));
        }
      if (temperature === '' || convert <= 0) {
        setColorMood(['#a1f6ff', '#103fad']);
        setDiplasy('snow')
      }
      else {
        setColorMood(['#e3d61b', '#c45923']);
        setDiplasy('sun')
      }
    }
    if (temperature === '') {
      setConversion('')
    }
  }, [temperature, currentTempSym]); 



  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colorMood}
        style={[styles.background, {height: screenHeight + 50}]}>
        <DisplayElement display={display}/>
        <View>
          <Text style={styles.conversion}> { conversion }{currentTempSym === 'C' ? '°F' : '°C' }</Text>
        </View>
        <InputTemperature currentTempSym={currentTempSym} setTemperature={setTemperature}/>
        <Button setCurrentTempSym={setCurrentTempSym} currentTempSym={currentTempSym}/>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
   background: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  conversion: {
    color: 'white',
    fontSize: 80,
    fontWeight: 500,
    textAlign: 'center',
  }
});
