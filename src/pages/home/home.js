import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import Card from '../../components/cards';

_cardH = (carta, naipe, posicao) => (
  <Card 
    carta = {carta} 
    naipe = {naipe}
    posicao = {posicao}
    altura = {90} 
    largura = {55}
    margem = {[10]}
    rota = 'selector' />
);

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.playerOneCards}>
        {this._cardH(1,1,11)}
        {this._cardH(1,4,12)}
      </View>
      <View style={styles.communityCards}>
        {this._cardH(1,4,31)}
        {this._cardH(1,1,32)}
        {this._cardH(1,4,33)}
        {this._cardH(1,1,34)}
        {this._cardH(1,4,35)}
      </View>
      <View style={styles.playerTwoCards}>
        {this._cardH(1,4,21)}
        {this._cardH(1,1,22)}
      </View>
    </View>
  );
};

export default Home;