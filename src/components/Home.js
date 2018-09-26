import React from 'react';
import { StyleSheet, Text, ScrollView, View, StatusBar } from 'react-native';
import DeckCard from './DeckCard'

class Home extends React.Component{
  static navigationOptions = {
    title: 'Flash Cards',
    headerTitleStyle: {
      fontSize: 30,
    }
  }

  render(){
    const { navigation } = this.props;
    return(
      <ScrollView style={{marginTop: 20}} contentContainerStyle={{alignItems: 'center'}}>
        <DeckCard title='New Deck' count={0} navigate = {navigation.navigate}/>
        <DeckCard title='SAT' count={0} navigate = {navigation.navigate}/>
        <DeckCard title='GRE' count={0} navigate = {navigation.navigate}/>
      </ScrollView>
    )
  }
}


export default Home;
