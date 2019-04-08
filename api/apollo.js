import ApolloClient from "apollo-boost";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

let instance = null;

const API_URI = 'http://192.168.0.45:8080/graphql';

class ApiClient {

  constructor() {
    if (!instance) {
      this.client = new ApolloClient({
        uri: API_URI,
        request: async operation => {
          const userToken = await AsyncStorage.getItem('userToken');
          if (userToken) {
            console.log("UsingToken " + userToken);
            operation.setContext({
              headers: {
                authorization:  `Bearer ${userToken}`
              }
            });
          }
        }
      });
    }

    return instance;
  }

  getClient() {
    return this.client;
  }
}

export default ApiClient;
