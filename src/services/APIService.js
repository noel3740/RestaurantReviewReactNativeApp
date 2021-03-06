import axios from "axios";

//const baseUrl = 'https://noel-restaurant-review-api.herokuapp.com';
const baseUrl = 'http://ec2-18-218-80-79.us-east-2.compute.amazonaws.com:3001';

export default {
  // Gets all restaurants
  getRestaurants: function() {
    return axios.get(`${baseUrl}/api/restaurants`);
  },
  // Gets the restaurant with the given id
  getRestaurant: function(id) {
    return axios.get(`${baseUrl}/api/restaurants/${id}`);
  },
  // Deletes the restaurant with the given id
  deleteRestaurant: function(id) {
    return axios.delete(`${baseUrl}/api/restaurants/${id}`);
  },
  // Saves a restaurant to the database
  saveRestaurant: function(restaurantData) {
    return axios.post(`${baseUrl}/api/restaurants`, restaurantData);
  }
};
