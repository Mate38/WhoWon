/**
 * Verifica combinações de cartas iguais
 * @param {*} hand 
 */
export const isSameKind = (hand) => {
  var cards = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  
  for(card in hand){
    cards[hand[card][0]-1]++
  }

  var four = hasFour(cards)
  var three = hasThree(cards)
  var two = hasTwo(cards)

  /**
   * quadra: 4
   * full house: 5
   * trinca: 3
   * par ou dois pares: 2
   */
  if(four[0]) return [4,four];
  else if(three[0] && two[0]) return [5,three,two];
  else if(three[0]) return [3,three];
  else if(two[0]) return [2,two];
  
  return false;
}

hasFour = (cards) => {
  for(card in cards){
    if(cards[card] == 4) return [card] 
  }
  return false
}

hasThree = (cards) => {
  for(card in cards){
    if(cards[card] == 3) return [card] 
  }
  return false
}

hasTwo = (cards) => {
  var pairs = []
  for(card in cards){
    if(cards[card] == 2) pairs.push(card) 
  }
  if(pairs.length > 0){
    return [pairs]
  }else 
    return false
}