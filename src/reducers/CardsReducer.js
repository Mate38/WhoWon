const INITIAL_STATE = {
  comunnityCards: [0,0,0,0,0],
  playerOneCards: [0,0],
  playerTwoCards: [0,0]
}
  
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'cardSelect':
      return { ...state, example: action.payload }
    default:
      return state;
  }
}