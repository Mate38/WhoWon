import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  card: {
    height: 90,
    width: 55,
    margin: 10
  },
  playerOneCards: {
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    //alignItems: 'flex-start',
    //justifyContent: '',
  },
  playerTwoCards: {
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    //alignItems: 'flex-start',
    //justifyContent: '',
  },
  communityCards: {
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});