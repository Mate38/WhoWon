import { isStraight } from './isStraight';
import { isFlush } from './isFlush';
import { isSameKind } from './isSameKind'

ordenate = (array) => {
  return array.sort(function compare(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  })
}

/**
 * Verifica conteúdo das mãos
 * @param {*} props 
 */
export const testHands = props => {
  
  var handOne = [props[11],props[12],props[31],props[32],props[33],props[34],props[35]]
  var handTwo = [props[21],props[22],props[31],props[32],props[33],props[34],props[35]]
  
  one = analyze(handOne)
  //two = analyze(handTwo)
  two = 0;

  console.log(one)

  if(one > two) return 1
  if(two > one) return 2
  if(one == two) return 0

  /**
   * [vencedor, mão 1, mão 2, carta alta]
   */
  return false;
}

/**
 * Royal flush: 9
 * Straight flush: 8
 * Quadra: 7
 * Full house: 6
 * Flush: 5
 * Sequencia: 4
 * Trinca: 3
 * Dois pares: 2
 * Um par: 1
 * Carta alta: 0
 */
analyze = (hand) => {

  ordenate(hand);

  var straight = isStraight(hand.slice());

  if(Array.isArray(straight)){
    var highCard = straight[1]
    straight = straight[0]
  }

  var flush = isFlush(hand.slice());

  if(Array.isArray(flush)){
    var naipe = flush[1]
    flush = flush[0]
  }

  /**
   * quadra: 4
   * full house: 5
   * trinca: 3
   * par ou dois pares: 2
   */
  var sameKind = isSameKind(hand.slice())

  //console.log(sameKind)

  var points = 0;

  //verifica se é royal flush ou straight flush
  if(straight && flush){
    if(highCard == 14){
      return 9;
    }else{
      return 8
    }
  }

  //verifica se é quadra
  if(sameKind[0] == 4){
    return 7
  }

  //verifica se é full house
  if(sameKind[0] == 5){
    return 6
  }

  //verifica se é flush
  if(flush){
    return 5
  }

  //verifica se é sequência
  if(straight){
    return 4
  }

  //verifica se é trinca
  if(sameKind[0] == 3){
    return 3
  }

  //verifica se tem par ou dois pares
  if(sameKind[0] == 2){
    var qnt = Object.keys(sameKind[1][0]).length
    if(qnt == 2){
      return 2
    }
    if(qnt == 1){
      return 1
    }
  }

  return 0
}

compare = () => {

}