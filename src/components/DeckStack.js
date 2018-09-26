import { createStackNavigator } from 'react-navigation'
import DeckCard from './DeckCard'
import DeckView from './DeckView'
import NewCardView from './NewCardView'
import Home from './Home'

const DeckStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  DeckView: {
    screen: DeckView,
  },
  DeckCard: {
    screen: DeckCard,
  },
  NewCardView: {
    screen: NewCardView,
  }
},{
  headerMode: 'float',
  navigationOptions:{
    headerStyle: {
      height: 50,
    },
    headerBackTitle: 'back',
  }
})

export default DeckStack
