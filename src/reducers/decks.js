import { ADD_DECK } from '../actions/decks'

export default function deck(state={}, action) {
  switch(action.type){
    case ADD_DECK:
      return{
        ...state,
        [action.deck.id]: action.deck,
      }
    default:
      return state;
  }
}
