import React from 'react';
import {
  StyleSheet, Text, View,
  TextInput, KeyboardAvoidingView
} from 'react-native';

export default class CustomTextArea extends React.Component{
  state = {
    height: 45,
  }

  handleContentSizeChange = (e) => {
    const height =
      e.nativeEvent.contentSize.height > this.state.height
        ? this.state.height + 45
        : e.nativeEvent.contentSize.height < this.state.height
        ? this.state.height - 45
        : this.state.height;

    this.setState({
      height
    })
  }

  render(){
    const { value, onChangeText, style } = this.props;
    const { height } = this.state;

    return(
      <TextInput
        value={value}
        style={[style]}
        multiline={true}
        autoGrow={true}
        onChangeText={onChangeText}
        />
    )
  }
}
