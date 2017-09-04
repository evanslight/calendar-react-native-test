/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, TouchableOpacity, AppRegistry, Button, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Calendar from 'react-native-calendar-select';

export default class AwesomeProject extends Component {
  constructor (props) {
  super(props);
  this.state = {
    startDate: new Date(),  
    isDateTimePickerVisible: false,
    isTimePickerVisible: false,
    isEndTimePickerVisible: false,
    endDate: new Date()
  };
  this.confirmDate = this.confirmDate.bind(this);
  this.openCalendar = this.openCalendar.bind(this);
}

confirmDate({startDate, endDate, startMoment, endMoment}) {
  this.setState({
    startDate,
    endDate
  });
  console.log('A  ~~~~~~~~~~~~~~~~~start~~~~~~~~~~~~~~~~~start has been picked: ', startDate);
  console.log('A  ~~~~~~~~~~~~~~~~~end~~~~~~~~~~~~~~~~~end has been picked: ', endDate);
}
openCalendar() {
  this.calendar && this.calendar.open();
}

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date========== has been picked: ', date);
    this._hideDateTimePicker();
  };

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleTimePicked = (date) => {
    console.log('A lalalalalalalalalal has been picked: ', date);
    this._hideTimePicker();
  };

  _showEndTimePicker = () => this.setState({ isEndTimePickerVisible: true });

  _hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false });

  _handleEndTimePicked = (date) => {
    console.log('A  endendendendendendendendendend has been picked: ', date);
    this._hideEndTimePicker();
  };

  render () {
    let customI18n = {
    'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'text': {
      'start': 'Check in',
      'end': 'Check out',
      'date': 'Date',
      'save': 'Confirm',
      'clear': 'Reset'
    },
    'date': 'DD / MM'  // date format
  };
  // optional property, too.
  let color = {
    subColor: '#f0f0f0'
  };

    return (
      <View style={{ flex: 1, justifyContent: 'center',
        alignItems: 'center', }}>
        <View>
      <Button title="Open Calendar" onPress={this.openCalendar}/>
      <Calendar
        i18n="en"
        ref={(calendar) => {this.calendar = calendar;}}
        customI18n={customI18n}
        color={color}
        format="YYYYMMDD"
        minDate="20170410"
        maxDate="20280312"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onConfirm={this.confirmDate}
      />
        </View>
        <View>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show Datepicker</Text>
          <Text>Show Datepicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'date'}
          datePickerModeAndroid='spinner'
        />
        </View>

        <View>
        <TouchableOpacity onPress={this._showTimePicker}>
          <Text> </Text>
          <Text>Show StartTimePicker</Text>
          <Text>Show StartTimePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handleTimePicked}
          onCancel={this._hideTimePicker}
          mode={'time'}
        />
        </View>

        <View>
        <TouchableOpacity onPress={this._showEndTimePicker}>
          <Text> </Text>
          <Text>Show EndTimePicker</Text>
          <Text>Show EndTimePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isEndTimePickerVisible}
          onConfirm={this._handleEndTimePicked}
          onCancel={this._hideEndTimePicker}
          mode={'time'}
        />
        </View>

      </View>
    );
  }

}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
