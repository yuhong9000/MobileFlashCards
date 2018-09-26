import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View , Alert
} from 'react-native';
import SubmitBtn from './UI/SubmitBtn'

class DeckView extends React.Component{
  static navigationOptions = ({navigation}) => {
    const { title } = navigation.state.params;

    return {
      title: `${title}`,
      headerTitleStyle: {
        fontSize: 30,
      }
    }
  }

  ToNewCardView = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;

    navigate(
      'NewCardView'
    )
  }

  OnRemoveDeck = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;


    Alert.alert(
      'Remove Deck',
      'Are you sure to remove this deck?',
      [
        { text: 'Yes', onPress: ()=> {navigate('Home')}},
        { text: 'Cancel' }
      ],
      { cancelable: false }
    )
  }

  render(){
    const { navigation } = this.props;
    const { title, count } = navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={[styles.title]}>{count} cards</Text>
        </View>
        <View style={styles.bottom}>
          <SubmitBtn text='Add Cards' onPress={this.ToNewCardView}/>
          <SubmitBtn text='Start Quiz' />
          <SubmitBtn text='Remove Deck' onPress={this.OnRemoveDeck}/>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

export default DeckView;
