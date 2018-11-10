/**
 * Verifica se possui sequência do mesmo naipe
 * @param {*} hand 
 */
export const isStraightFlush = (hand) => {
  var cont = 0
  var cards = Object.keys(hand).length
  var high = [0,0,0,0,0];

  //adiciona o A como 14
  for(i = 0; i < cards-1; i++){
    if(hand[i] == 1){
      hand.push([14,hand[i]])
    }
  }

  cards = Object.keys(hand).length
  
  for(i = 0; i < cards; i++){
    
    if(hand[i] != hand[i+1]){
      if(hand[i]-1 == hand[i+1]){
        high[cont] = hand[i]
        cont++
      }else{ 
        cont = 0;
      }
    }
    if(cont == 4){
      high[cont] = hand[i+1]
      return [true, high];
    }
  }
  return false;
}