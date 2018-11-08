import { StyleSheet, Dimensions } from 'react-native';

let height = Dimensions.get('window').height; //Altura da tela
let width = Dimensions.get('window').width; //Largura da tela

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  ouro: {
    //backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copas: {
    //backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  espadas: {
    //backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paus: {
    //backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});