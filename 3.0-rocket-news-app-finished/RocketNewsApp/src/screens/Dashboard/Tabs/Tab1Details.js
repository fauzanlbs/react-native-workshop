import React from 'react';
import { View, Text, WebView } from 'react-native';

class Tab1Details extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: this.props.navigation.state.params.sumber }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default Tab1Details;
