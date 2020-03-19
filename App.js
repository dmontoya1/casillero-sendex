import React, {Component} from 'react';
import {View, Text} from 'react-native';

import AppContainer from './src/components/Navigation/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppContainer />;
  }
}

export default App;
