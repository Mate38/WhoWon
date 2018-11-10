/**
 * Verifica se possui sequência
 * @param {*} hand 
 */
export const isStraight = (hand) => {
  var cont = 0
  var cards = Object.keys(hand).length
  var high = [0,0,0,0,0];

  //adiciona o A como 14
  for(i = 0; i < cards-1; i++){
    if(hand[i][0] == 1){
      hand.push([14,hand[i][1],hand[i][2]])
    }
  }

  cards = Object.keys(hand).length
  
  for(i = cards-1; i > 0; i--){
    if(hand[i][0] != hand[i-1][0]){
      if(hand[i][0]-1 == hand[i-1][0]){
        high[cont] = hand[i][0]
        cont++
      }else{ 
        cont = 0;
      }
    }
    if(cont == 4){
      high[cont] = hand[i-1][0]
      return [true, high];
    }
  }
  return false;
}