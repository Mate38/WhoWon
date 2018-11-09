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
    flexDirection: 'row',
  },
  playerTwoCards: {
    flexDirection: 'row',
  },
  communityCards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionText: {
    color: "white",
    marginTop: 50,
    fontSize: 20
  },
  titleText: {
    color: "white",
    fontSize: 35
  },
  messageText: {
    color: "white",
    fontSize: 20
  }
});