import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

import Separator from '../../../components/Separator';

class Tab2Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: 'Fauzan Lubis',
      alamat: 'Kompleks mars 3 no 1 (depan rumah kakek alien)',
      email: 'fauzanlubis23@gmail.com',
      phone: '081281034103',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            source={{
              uri:
                'https://www.bestpersonnel.ie/wp-content/uploads/2017/11/Sani-Sebastian.png',
            }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={styles.textBig}>{this.state.nama}</Text>
          <Text>Medan, Indonesia</Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.textSmall}>Alamat</Text>
          <Text>{this.state.alamat}</Text>
        </View>

        <Separator />

        <View style={styles.listItem}>
          <Text style={styles.textSmall}>Email</Text>
          <Text>{this.state.email}</Text>
        </View>

        <Separator />

        <View style={styles.listItem}>
          <Text style={styles.textSmall}>Phone</Text>
          <Text>{this.state.phone}</Text>
        </View>

        <Separator />

        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.listItemTouch}>
            <Text>Ganti Password</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#fff',
  },
  listItemTouch: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  textSmall: {
    fontSize: 11,
  },
  textBig: {
    fontSize: 18,
    margin: 5,
    color: 'black',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 35,
  },
});

export default Tab2Screen;
