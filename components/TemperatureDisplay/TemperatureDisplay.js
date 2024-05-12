import {View,StyleSheet, Image} from 'react-native';

export default function DisplayElement({ display }) {
  return (
    
      <View style={styles.container}>
        {display === 'snow' ? <Image style={styles.displayImage} source={require('../../assets/snow.png')}/> 
        : <Image style={styles.displayImage} source={require('../../assets/sun.png')}/>}
        
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});
