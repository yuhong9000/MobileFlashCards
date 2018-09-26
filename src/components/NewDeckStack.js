import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import CustomTextArea from './UI/CustomTextArea'
import SubmitBtn from './UI/SubmitBtn'

class NewDeckView extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'New Deck',
      headerTitleStyle: {
        fontSize: 30,
      }
    }
  }

  state = {
    input: '',
  }

  handleChangeText = (input) => {
    this.setState({
      input,
    })
  }

  ToHomeView = () => {
    // update redux and database

    const { navigation } = this.props;
    const { navigate } = navigation;

    navigate(
      'Home',
    )
  }

  render(){
    const { input } = this.state;

    return(
      <View style={styles.container}>
        <Text style={styles.text}>Enter Title</Text>
        <CustomTextArea
          value={input}
          style={styles.input}
          onChangeText={this.handleChangeText}
          />
        <SubmitBtn text='Submit' onPress={this.ToHomeView}/>
      </View>
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
    backgroundColor: 'white',
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

const NewDeckStack = createStackNavigator({
  NewDeckView: {
    screen: NewDeckView,
  },
},{
  headerMode: 'float',
  navigationOptions:{
    headerStyle: {
      height: 50,
    },
    headerBackTitle: 'back',
  }
})

export default NewDeckStack;
