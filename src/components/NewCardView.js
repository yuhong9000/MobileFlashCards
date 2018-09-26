import React from 'react';
import {
  StyleSheet, Text, View,
  TextInput, KeyboardAvoidingView
} from 'react-native';
import SubmitBtn from './UI/SubmitBtn'
import CustomTextArea from './UI/CustomTextArea'

class NewCardView extends React.Component{
  static navigationOptions = ({navigation}) => {
    return {
      title: 'New Card',
      headerTitleStyle: {
        fontSize: 30,
      }
    }
  }

  state = {
    question: '',
    answer: '',
  }

  ToDeckView = () => {
    // update redux and database

    const { navigation } = this.props;
    const { navigate } = navigation;

    navigate(
      'DeckView',
    )
  }

  handleQuestionChange = (question) => {
    this.setState({
      question,
    })
  }

  handleAnswerChange = (answer) => {
    this.setState({
      answer,
    })
  }

  render(){
    const { navigation } = this.props;
    const { question, answer } = this.state;
    // const { deck_id} = navigation.state.params;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.text}>Enter Questions</Text>
        <CustomTextArea
          value={question}
          style={styles.input}
          onChangeText={this.handleQuestionChange}
          />
        <Text style={styles.text}>Enter Answer</Text>
        <CustomTextArea
          value={answer}
          style={styles.input}
          onChangeText={this.handleAnswerChange}
          />
        <SubmitBtn text='Submit' onPress={this.ToDeckView}/>
      </KeyboardAvoidingView>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'orange',
    width: '100%',
    height: 45,
    fontSize: 25,
    margin: 10,
    padding: 10,
    paddingTop: 10,

  },
  text: {
    fontSize: 25,
    margin: 10,
  }
});

export default NewCardView;
