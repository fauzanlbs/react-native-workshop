import React from 'react';
import {View} from 'react-native';

 import Routes from './src/Routes';
// import Routes from './src/screens/Dashboard/Routes';

// import Tab1Screen from './src/screens/Dashboard/Tabs/Tab1Screen';


function App() {
  return(
   <View style={{flex:1}}>
    {/* <Tab1Screen /> */}
   <Routes />
  </View>
  )
}

export default App;