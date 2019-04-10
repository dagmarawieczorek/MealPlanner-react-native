import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {CalendarList, Agenda} from 'react-native-calendars';
// import colors from "../constants/Colors";

class CalendarScreen extends Component {

    render() {
        return (
            <ScrollView>
        <CalendarList
            current={'2012-05-16'}
            pastScrollRange={24}
            futureScrollRange={24}
            horizontal
            pagingEnabled
            style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
          />
          <Agenda></Agenda>
            </ScrollView>
            
            )
    }
}

export default CalendarScreen;