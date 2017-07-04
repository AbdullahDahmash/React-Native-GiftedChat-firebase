import React from 'react';
import Home from './components/Home';
import Chat from './components/Chat';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Platform
} from 'react-native';

export default class extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' component={Home} title='Home'></Scene>
          <Scene key='chat' component={Chat} title='Chat'></Scene>
        </Scene>
      </Router>
    )
  }
}
