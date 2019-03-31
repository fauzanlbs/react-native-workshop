import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
// import { Button } from 'react-native-paper';

import Card from '../../../components/Card';
import Button from '../../../components/Button';

class Tab1Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
    };
    this._renderCard = this._renderCard.bind(this);
  }

  componentDidMount() {
    const url = `https://api.spacexdata.com/v3/launches?limit=10`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res],
          error: res.error || null,
          isLoading: false,
        });
        console.log(this.state.data, 'ini state datanya');
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  _renderCard({ item }) {
    console.log(item, 'ini itemnya');
    return (
      <Card
        imageMode="contain"
        title={item.mission_name}
        image={{
          uri: item.links.mission_patch,
        }}>
        <Button text = "detail"
          onPress={() =>
            this.props.navigation.navigate('Tab1Details', {
              hideTabBar: true,
              sumber: item.links.article_link,
            })
          }>
          
        </Button>
      </Card>
    );
  }

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderCard}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default Tab1Screen;
