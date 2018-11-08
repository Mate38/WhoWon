import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import Card from '../../components/cards';

_cardH = (posicao) => (
  <Card
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
        {this._cardH(11)}
        {this._cardH(12)}
      </View>
      <View style={styles.communityCards}>
        {this._cardH(31)}
        {this._cardH(32)}
        {this._cardH(33)}
        {this._cardH(34)}
        {this._cardH(35)}
      </View>
      <View style={styles.playerTwoCards}>
        {this._cardH(21)}
        {this._cardH(22)}
      </View>
    </View>
  );
};

export default Home;