import { isStraight } from './isStraight';
import { isFlush } from './isFlush';
import { isSameKind } from './isSameKind';
import { isStraightFlush } from './isStraightFlush';

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
  //one = 0;
  two = analyze(handTwo)
  //two = 0;

  console.log(one)
  console.log(two)

  if(one[0] > two[0]) return 1
  if(two[0] > one[0]) return 2
  if(one[0] == two[0]){
    //Royal flush impossivel empatar
    //Se ambos tem straight flush
    if(one[0] == 8){
      if(one[1][0] > two[1][0]) return 1
      if(two[1][0] > one[1][0]) return 2
      else return 3
    }
    if(one[0] == 7){
      if(one[1][0] > two[1][0]) return 1
      if(two[1][0] > one[1][0]) return 2
      if(one[1][1] > two[1][1]) return 1
      if(two[1][1] > one[1][1]) return 2
      else return 3
    }
    if(one[0] == 6){
      if(one[1] > two[1]) return 1
      if(two[1] > one[1]) return 2
      if(one[2][1] > two[2][1]) return 1
      if(two[2][1] > one[2][1]) return 2
      else return 3
    }
    if(one[0] == 5){
      for(i = 0; i < 5; i++){
        if(one[1][i] > two[1][i]) return 1
        if(two[1][i] > one[1][i]) return 2
      }
      return 3
    }
    if(one[0] == 4){
      for(i = 0; i < 5; i++){
        if(one[1][i] > two[1][i]) return 1
        if(two[1][i] > one[1][i]) return 2
      }
      return 3
    }
    if(one[0] == 3){
      for(i = 0; i < 3; i++){
        if(one[1][i] > two[1][i]) return 1
        if(two[1][i] > one[1][i]) return 2
      }
      return 3
    }

    return 3
  }

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
  //console.log(straight)

  if(Array.isArray(straight)){
    var sHand = straight[1]
    straight = straight[0]
  }

  var flush = isFlush(hand.slice());
  //console.log(flush)

  if(Array.isArray(flush)){
    var naipe = flush[1]
    var fHand = flush[2]
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
    var straightFlush = isStraightFlush(fHand.slice())
    //console.log(straightFlush)

    if(straightFlush){
      if(fHand[0] == 14){
        return [9,straightFlush[1]];
      }else{
        return [8,straightFlush[1]]
      }
    }
  }

  //verifica se é quadra
  if(sameKind[0] == 4){
    return [7,sameKind[1]]
  }

  //verifica se é full house
  if(sameKind[0] == 5){
    return [6,sameKind[1],sameKind[2]]
  }

  //verifica se é flush
  if(flush){
    return [5,fHand]
  }

  //verifica se é sequência
  if(straight){
    return [4,sHand]
  }

  //verifica se é trinca
  if(sameKind[0] == 3){
    return [3,sameKind[1]]
  }

  //verifica se tem par ou dois pares
  if(sameKind[0] == 2){
    var qnt = Object.keys(sameKind[1][0]).length
    if(qnt == 2){
      return [2,null]
    }
    if(qnt == 1){
      return [1,null]
    }
  }

  return 0
}