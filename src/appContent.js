import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './router';

class AppContent extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyC3ER9zagAnW5C7U5OCx03qyhc5LUJx3AE",
      authDomain: "fir-react-19b06.firebaseapp.com",
      databaseURL: "https://fir-react-19b06.firebaseio.com",
      projectId: "fir-react-19b06",
      storageBucket: "fir-react-19b06.appspot.com",
      messagingSenderId: "1014081532360"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default AppContent;
