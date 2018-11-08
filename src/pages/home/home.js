import React, { Component } from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { card } from '../../components/cards';

_cardH = (carta, naipe) => (
  card(carta, naipe, 90, 55, [10], 'selector')
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