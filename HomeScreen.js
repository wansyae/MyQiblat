import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector'
import PrayerTimes from 'prayer-times';
import Header from './src/components/Header';
import PrayTimeLists from './src/components/PrayTimeLists';
import colors from './src/constants/colors';


const prayTimes = new PrayerTimes();
const locations = [
  {
    key: 1,
    label: 'Zon 1:HULU SELANGOR, GOMBAK, PETALING/SHAH ALAM, HULU LANGAT DAN SEPANG',
    coord: [3.1279, 101.5945]
  },
  {
    key: 2,
    label: 'Zon 2: SABAK BERNAM DAN KUALA SELANGOR',
    coord: [3.7696, 100.9837]
  },
  {
    key: 3,
    label: 'Zon 3: KLANG DAN KUALA LANGAT',
    coord: [2.8038, 101.4951]
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      times: prayTimes.getTimes(new Date(), locations[0].coord, +8, 'auto', '24h'),
      locationSelected: locations[0]
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header location={this.state.locationSelected.label} />
        <ModalSelector
          style={styles.locationSelector}
          data={locations}
          initValue="Zon 1:HULU SELANGOR, GOMBAK, PETALING/SHAH ALAM, HULU LANGAT DAN SEPANG"
          onChange={(option) => { 
            this.setState({
              times: prayTimes.getTimes(new Date(), option.coord, +8, 'auto', '24h'),
              locationSelected: option
            }) 
          }} />

        <PrayTimeLists times={this.state.times} />
          
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Compass')} title="Compass" />
        <Button onPress={() => this.props.navigation.navigate('Date')} title="Date" />
        <Button onPress={() => this.props.navigation.navigate('Calender')} title="Calender" />
        </View>




      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pale_grey,
  },
  //configContainer: {
    //alignItems: 'flex-end',
    //paddingBottom: 15
  //},
  locationSelector: {
    marginBottom: 10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10  
  }
});
