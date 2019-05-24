import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";

export default class DateScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.containerScroll}>
      
      <View style={styles.container}>

      <Text style={styles.title}>IMPORTANT DATES OF 2019</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text style= {styles.label}>3 April 2019</Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}>   ISRAK & MIKRAJ</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style= {styles.label}>6 May 2019</Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}> AWAL RAMADHAN</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style= {styles.label}>22 May 2019</Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}> NUZUL AL-QURAN</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style= {styles.label}>5 June 2019</Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}>           Eid Fitri</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style= {styles.label}>2 August 2019</Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}> AWAL ZULHIJJAH</Text>
      <Text>  </Text>
      <Text></Text>
      <Text>  </Text>
      <Text style= {styles.label}>11 August 2019 </Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}>          EID ADHA</Text>
      <Text>  </Text>
      <Text></Text>
      <Text>  </Text>
      <Text style= {styles.label}>1 September 2019</Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}> AWAL MUHARRAM</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style= {styles.label}>9 September 2019</Text>
      <Text style={{width: 150, height: 25, backgroundColor: '#73F958'}}>  MAULIDUR RASUL</Text>
       
      <View style={styles.button}>
      <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
      <Button onPress={() => this.props.navigation.navigate('Compass')} title="Compass" />
      <Button onPress={() => this.props.navigation.navigate('Calender')} title="Calender" />
      </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3'
  },
  containerScroll: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#E3E3E3'
  },
  title:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
   },
   button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  }
});