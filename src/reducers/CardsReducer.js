const INITIAL_STATE = {
  comunnityCardOne:   [null,null,31], // 31
  comunnityCardTwo:   [null,null,32], // 32
  comunnityCardThree: [null,null,33], // 33
  comunnityCardFour:  [null,null,34], // 34
  comunnityCardFive:  [null,null,35], // 35
  playerOneCardOne:   [null,null,11], // 11
  playerOneCardTwo:   [null,null,12], // 12
  playerTwoCardOne:   [null,null,21], // 21
  playerTwoCardTwo:   [null,null,22], // 22
}
  
export default (state = INITIAL_STATE, action) => {
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