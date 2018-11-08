const INITIAL_STATE = {
  comunnityCardOne:   [0,0], // 31
  comunnityCardTwo:   [0,0], // 32
  comunnityCardThree: [0,0], // 33
  comunnityCardFour:  [0,0], // 34
  comunnityCardFive:  [0,0], // 35
  playerOneCardOne:   [0,0], // 11
  playerOneCardTwo:   [0,0], // 12
  playerTwoCardOne:   [0,0], // 21
  playerTwoCardTwo:   [0,0], // 22
}
  
export default (state = INITIAL_STATE, action) => {
  //console.log(state)
  switch(action.type){
    case 11:
      return { ...state, playerOneCardOne: action.payload }
    case 12:
      return { ...state, playerOneCardTwo: action.payload }
    case 21:
      return { ...state, playerTwoCardOne: action.payload }
    case 22:
      return { ...state, playerTwoCardTwo: action.payload }
    case 31:
      return { ...state, comunnityCardOne: action.payload }
    case 32:
      return { ...state, comunnityCardTwo: action.payload }
    case 33:
      return { ...state, comunnityCardThree: action.payload }
    case 34:
      return { ...state, comunnityCardFour: action.payload }
    case 35:
      return { ...state, comunnityCardFive: action.payload }
    default:
      return state;
  }
}