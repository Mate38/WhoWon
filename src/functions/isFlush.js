/**
 * Verifica se possui 5 cartas do mesmo naipe
 * @param {*} hand 
 */
export const isFlush = (hand) => {
  var ouro = 0;
  var copas = 0;
  var espadas = 0;
  var paus = 0;

  console.log(hand)
  
  for(card in hand){
    console.log(card)
    if(hand[card][1] == 1) ouro++; 
    else if(hand[card][1] == 2) copas++; 
    else if(hand[card][1] == 3) espadas++; 
    else if(hand[card][1] == 4) paus++; 
  }

  if(ouro > 4) return([true, 1]);
  if(copas > 4) return([true, 2]);
  if(espadas > 4) return([true, 3]);
  if(paus > 4) return([true, 4]);
  
  return false;
}