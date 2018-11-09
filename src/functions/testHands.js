import { isRoyalStreetFlush } from './isRoyalStreetFlush';
import { isStraight } from './isStraight';

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
  
  const handOne = [props[11],props[12],props[31],props[32],props[33],props[34],props[35]]
  const handTwo = [props[21],props[22],props[31],props[32],props[33],props[34],props[35]]
  
  ordenate(handOne);
  ordenate(handTwo);

  //console.log(handOne)

  var res = isStraight(handOne);

  if(Array.isArray(res)){
    var high = res[1]
    res = res[0]
  }
  
  //console.log(res)
  //console.log(high)

  return true;
}