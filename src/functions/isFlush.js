/**
 * Verifica se possui 5 cartas do mesmo naipe
 * @param {*} hand 
 */
export const isFlush = (hand) => {
  var ouro = [];
  var copas = [];
  var espadas = [];
  var paus = [];

  var cards = Object.keys(hand).length

  //adiciona o A como 14
  for(i = 0; i < cards-1; i++){
    if(hand[i][0] == 1){
      hand.push([14,hand[i][1],hand[i][2]])
    }
  }

  cards = Object.keys(hand).length
  
  for(i = cards-1; i >= 0; i--){
    if(hand[i][1] == 1){
      ouro.push(hand[i][0])
    } 
    else if(hand[i][1] == 2){
      copas.push(hand[i][0])
    }
    else if(hand[i][1] == 3){
      espadas.push(hand[i][0])
    } 
    else if(hand[i][1] == 4){
      paus.push(hand[i][0])
    } 
  }

  if(ouro.lenght > 4) return([true, 1, ouro]);
  if(copas.length > 4) return([true, 2, copas]);
  if(espadas.length > 4) return([true, 3, espadas]);
  if(paus.length > 4) return([true, 4, paus]);
  
  return false;
}