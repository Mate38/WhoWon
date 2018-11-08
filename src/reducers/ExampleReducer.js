const INITIAL_STATE = {
  example: 'Texto inicial',
}
  
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'exampleText':
      return { ...state, example: action.payload }
    default:
      return state;
  }
}