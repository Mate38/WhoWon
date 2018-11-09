/**
 * Verifica se a carta já foi selecionada
 * @param {*} carta 
 * @param {*} naipe 
 * @param {*} selectCards 
 */
export const isSelected = (carta, naipe, selectCards) => {

  for(card in selectCards){
    if(selectCards[card][0] == carta && selectCards[card][1] == naipe){
      return true
    }
  }
  return false
}