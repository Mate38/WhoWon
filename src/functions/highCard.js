/**
 * Alinha cartas
 * @param {*} hand 
 */
export const highCard = (hand) => {
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
    high[cont] = hand[i][0]
    cont++

    if(cont == 5){
      return high;
    }
  }
  return false;
}