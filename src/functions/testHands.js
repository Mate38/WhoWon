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
 * Verifica mão vencedora
 * @param {*} props 
 */
export const testHands = props => {
  
  var handOne = [props[11],props[12],props[31],props[32],props[33],props[34],props[35]]
  var handTwo = [props[21],props[22],props[31],props[32],props[33],props[34],props[35]]
  
  one = analyze(handOne)
  two = analyze(handTwo)

  return [one, two];
}

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

  var sameKind = isSameKind(hand.slice())

  return [straight, flush, sameKind]
}