import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import CalendarView from '../components/CalendarView'

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <CalendarView /> */}
        <Text>
        KEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEKKEKEKEK
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
