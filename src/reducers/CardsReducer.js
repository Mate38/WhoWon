/**
 * Primeiro digito: 1= Jogador 1; 2= Jogador 2; 3= Cartas comunitárias
 * Segundo digito: Número da carta
 */
// const INITIAL_STATE = {
//   31: [null,null,31],
//   32: [null,null,32],
//   33: [null,null,33],
//   34: [null,null,34],
//   35: [null,null,35],
//   11: [null,null,11],
//   12: [null,null,12],
//   21: [null,null,21],
//   22: [null,null,22],
// }

// /**
//  * TESTE
//  */
const INITIAL_STATE = {
  31: [5,2,31],
  32: [2,3,32],
  33: [3,4,33],
  34: [3,3,34],
  35: [10,2,35],
  11: [1,1,11],
  12: [3,2,12],
  21: [3,4,21],
  22: [6,3,22],
}
  
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 11:
      return { ...state, 11: action.payload }
    case 12:
      return { ...state, 12: action.payload }
    case 21:
      return { ...state, 21: action.payload }
    case 22:
      return { ...state, 22: action.payload }
    case 31:
      return { ...state, 31: action.payload }
    case 32:
      return { ...state, 32: action.payload }
    case 33:
      return { ...state, 33: action.payload }
    case 34:
      return { ...state, 34: action.payload }
    case 35:
      return { ...state, 35: action.payload }
    default:
      return state;
  }
}