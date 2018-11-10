/**
 * Verifica combinações de cartas iguais
 * @param {*} hand 
 */
export const isSameKind = (hand) => {
  var cards = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  
  for(card in hand){
    cards[hand[card][0]-1]++
  }

  /**
   * Array passa a conter elementos do 2 ao A
   */
  var a = cards[0]
  cards.splice(0,1)
  cards.push(a)

  var four = hasFour(cards)
  var three = hasThree(cards)
  var two = hasTwo(cards)

  //console.log(three)
  //console.log(two)

  /**
   * quadra: 4
   * full house: 5
   * trinca: 3
   * par ou dois pares: 2
   */
  if(four) return [4,four];
  else if(three[0] && two) return [5,three,two];
  else if(three[0]) return [3,three];
  else if(two) return [2,two];
  
  return false;
}

hasFour = (cards) => {
  var crd = cards.length
  for(i = crd-1; i >= 0; i--){
    if(cards[i] == 4){
      for(j = crd-1; j >= 0; j--){
        if(cards[j] != 0 && j != i){
          return [i+2,j+2]
        }
      };
    }  
  }
  return false
}

hasThree = (cards) => {
  var crd = cards.length
  for(i = crd-1; i >= 0; i--){
    if(cards[i] == 3){
      for(j = crd-1; j >= 0; j--){
        if(cards[j] != 0 && j != i){
          for(k = crd-1; k >= 0; k--){
            if(cards[k] != 0 && k != i && k != j){
              return [i+2,j+2,k+2]
            }
          };
        }
      }
    } 
  }
  return false
}

hasTwo = (cards) => {
  var qnt = cards.length
  var pairs = []

  for(i = qnt; i >= 0; i--){
    if(cards[i] == 2) pairs.push(i+2)
    if(pairs.length == 2) break;
  }

  if(pairs.length > 0){
    return pairs
  }else 
    return false
}