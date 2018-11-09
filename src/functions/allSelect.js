import { testHands } from './testHands';

/**
 * Verifica se todas as cartas foram selecionadas
 * @param {*} props 
 */
export const allSelect = props => {
  for(card in props){
    if(!props[card][0] || !props[card][1]){
      return false
    }
  }
  
  return testHands(props);
}