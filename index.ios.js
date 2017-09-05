import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet, 
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Calendarpicker from './src/Calendarpicker/Calendarpicker';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
          style={styles.logo} 
          source={require('./img/calendartime.png')} 
          />
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.logincontainer}>
        <TextInput 
        style={styles.inputpart} 
        placeholder="Please input your email"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="rgba(255,255,255,0.7)"
        onChangeText={(text) => this.setState({text})} 
        />
        <TextInput 
        style={styles.inputpart}
        placeholder="Please input your password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        secureTextEntry
        onChangeText={(text) => this.setState({text})} 
        ref={(input) => this.passwordInput = input}
        />
        <Button
          onPress={() => navigate('PickerOB')}
          title="Calendar Time Picker"
        />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const AwesomeProject = StackNavigator({
  Home: { screen: HomeScreen },
  PickerOB: { screen: Calendarpicker },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputpart: {
    height: 40, 
    width: 260, 
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  logocontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100

  },
  logincontainer: {
    marginTop: 10,

  }


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);