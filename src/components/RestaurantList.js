import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Platform,
  Image
} from 'react-native';
//import Restaurant from './models/Restaurant';
import Header from './Header/Header';
import RestaurantRow from './RestaurantRow';
import API from '../services/APIService';
import PizzaImage from '../images/pizza.png'

// const restaurants = [
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
//   new Restaurant('React Cafe', '123 Anywhere St'),
//   new Restaurant('Fancy Restaurant', '799 Main St'),
//   new Restaurant('Taco Place', '550 Maple St'),
// ]


export default class RestaurantList extends React.Component {

  state = {
    search: null,
    restaurants: []
  }

  componentDidMount() {
    console.log(Platform.OS);

    API.getRestaurants()
      .then(result => this.setState({ restaurants: result.data }))
      .catch(err => console.log(err));
  }

  render() {

    return (
      <View style={{
        flex: 1
      }}>
        <View style={{
          marginTop: 30,
          alignItems: 'center'
        }}>
          <Image source={PizzaImage} />
        </View>
        <Header />

        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search} />

        <FlatList
          contentContainerStyle={{
            paddingTop: 20
          }}
          data={
            this.state.restaurants
              .filter(place =>
                !this.state.search ||
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)
          }

          renderItem={
            ({ item, index }) =>
              <RestaurantRow 
                place={item} 
                index={index}
                navigation={this.props.navigation} />
          }

          keyExtractor={(item, index) => index.toString()}

          initialNumToRender={16}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})