import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    height: 40,
    margin: 20,
    padding: 5,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  }
})

export default class extends React.Component {
  state = {
    name: ''
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Hello from Home.js
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Your name"
          onChangeText={(text) => {
            this.setState({
              name: text,
            })
          }}
          value={this.state.name}
        >
        </TextInput>
        <TouchableOpacity
          onPress={() => {
            // Navigate to the second screen
            Actions.chat({
              name: this.state.name,
            })
          }}
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
