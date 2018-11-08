import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import Card from '../../components/cards';

_cardH = (carta, naipe) => (
  <Card 
    carta = {carta} 
    naipe = {naipe}
    altura = {90} 
    largura = {55}
    margem = {[10]}
    rota = 'selector' />
);

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.playerOneCards}>
        {this._cardH(1,1)}
        {this._cardH(1,4)}
      </View>
      <View style={styles.communityCards}>
        {this._cardH(1,4)}
        {this._cardH(1,1)}
        {this._cardH(1,4)}
        {this._cardH(1,1)}
        {this._cardH(1,4)}
      </View>
      <View style={styles.playerTwoCards}>
        {this._cardH(1,4)}
        {this._cardH(1,1)}
      </View>
    </View>
  );
};

export default Home;