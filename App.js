import React, {Component} from 'react';
import {View, Text} from 'react-native';

import AppContainer from './src/components/Navigation/Navigation';

import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://34b68c0848c94450b9dee024ad5d01a4@o397987.ingest.sentry.io/5549623', 
});


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
