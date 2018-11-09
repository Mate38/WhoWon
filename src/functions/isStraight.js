/**
 * Verifica se possui sequência
 * @param {*} hand 
 */
export const isStraight = (hand) => {
  var cont = 0
  var cards = Object.keys(hand).length
  var high = 0;

  for(i = 0; i < cards-1; i++){

    if(hand[i][0] == 1){
      hand.push([14,hand[i][1],hand[i][2]])
    }

  }

  cards = Object.keys(hand).length
  //console.log('cards: '+cards)
  var flag = true;
  
  for(i = cards-1; i > 0; i--){
    //console.log('i: '+i)

    if(hand[i][0] != hand[i-1][0]){
      //console.log(hand[i][0], hand[i-1][0])
      if(hand[i][0]-1 == hand[i-1][0]){
        //console.log(hand[i][0]-1, hand[i-1][0])
        cont++
        //console.log('cont: '+cont)
        if(flag){
          high = hand[i][0]
          flag = false
        }
      }else{ 
        cont = 0;
        flag = true
      }
    }

    if(cont == 4){
      //console.log('high: '+high)
      return [true, high];
    }
  }
  return false;
}