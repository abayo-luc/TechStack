/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Platform,
  UIManager,
  LayoutAnimation} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// redux actions
import {connect} from 'react-redux';
import * as actions from '../actions/index';

// my import
import {CardSection} from './Common';

class ListItem extends Component {
  constructor(props) {
    super(props);
     if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  componentWillUpdate(){
    LayoutAnimation.spring()
  }

  rednerDescription() {
    const {expanded, library, selectedLibraryId} = this.props
    if(expanded){
      return(
        <CardSection>
          <Text style={{flex: 1}}>{library.description}</Text>
        </CardSection>
      )
    }
  }
  render() {
    console.log(this.props)
    const {titleStyle} = styles;
    const {id, title} = this.props.library
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.rednerDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = EStyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,

  }
})

const mapStateToProps = (state, ownProps) =>{
  const expanded = state.selectedLibraryId === ownProps.library.id
  return {expanded: expanded}
}

export default connect(mapStateToProps, actions)(ListItem);