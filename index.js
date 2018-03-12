/* @flow weak */

import React from 'react';
import {View,Text,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// redux things
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './App/Reducers/index';

// my imported components
import {Header } from './App/Components/Common';
import LibraryList from './App/Components/LibraryList';
const App = ({}) => (
  <Provider store={createStore(reducers)}>
    <View style={{flex: 1}}>
        <Header headerText="Tech Stack"/>
        <LibraryList/>
    </View>
  </Provider>
);



EStyleSheet.build({
  $textColor: '#0275d8'
});

export default App;
