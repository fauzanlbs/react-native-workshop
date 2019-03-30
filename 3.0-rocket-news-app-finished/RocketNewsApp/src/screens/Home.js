import React from 'react';
import { View, Text, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

const window = Dimensions.get('window');

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri:
              'https://ip4img.goiphonewallpapers.com/2011/09/21/ba3bd163c0277e0_640x960.jpg',
          }}
          style={{
            flex: 1,
            height: window.height,
          }}>
          <Text>Home!</Text>

          <Button color= '#fff'
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'purple',
              
              elevation: 10,
            }}
            contentStyle={{ elevation: 10 }}
            raised
            icon="launch"
            
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text>Get Started</Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

export default Home;
