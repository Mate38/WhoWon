/**
 * Primeiro digito: 1= Jogador 1; 2= Jogador 2; 3= Cartas comunitárias
 * Segundo digito: Número da carta
 */
const INITIAL_STATE = {
  31: [null,null,31],
  32: [null,null,32],
  33: [null,null,33],
  34: [null,null,34],
  35: [null,null,35],
  11: [null,null,11],
  12: [null,null,12],
  21: [null,null,21],
  22: [null,null,22],
}

// /**
//  * TESTE
//  */
// const INITIAL_STATE = {
//   31: [2,1,31],
//   32: [1,2,32],
//   33: [10,3,33],
//   34: [12,4,34],
//   35: [3,4,35],
//   11: [5,1,11],
//   12: [9,2,12],
//   21: [8,1,21],
//   22: [2,2,22],
// }
  
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