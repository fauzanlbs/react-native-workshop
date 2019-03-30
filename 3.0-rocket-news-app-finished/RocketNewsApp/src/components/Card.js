import React, { Component } from 'react';

import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

export default class Card extends Component {
  render() {
    const { children, style, image, imageMode, title } = this.props;

    return (
      <TouchableNativeFeedback useForeground={true}>
        <View style={[styles.container, style]}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          </View>
          <ImageBackground
            source={image}
            imageStyle={[
              styles.imageStyle,
              imageMode ? { resizeMode: imageMode } : null,
            ]}
            style={{ minHeight: 120, justifyContent: 'flex-end' }}
          />

          {children}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    elevation: 2,
    margin: 5,
    marginTop: 35,
    borderRadius: 5,
  },
  imageStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
