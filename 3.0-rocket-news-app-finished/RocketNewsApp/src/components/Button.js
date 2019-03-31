import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

export default class Button extends Component {
  render() {
    const { style, textStyle, text, color, ...props } = this.props;

    return (
      <TouchableHighlight {...props} style={[styles.button, style]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <Text style={[styles.text, textStyle]}> {text} </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    borderRadius: 5,

    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
});
