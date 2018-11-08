import React, { Component } from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { card } from '../../components/cards';

/**
 * card(carta, naipe, altura, largura, [margem esquerda, margem superior, margem direita, margem inferior])
 */
_cardS = (carta, naipe) => (
  card(carta, naipe, 47, 34, [10, 3, 10, 3], 'home')
);

const Selector = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ouro}>
        {this._cardS(1,1)}
        {this._cardS(2,1)}
        {this._cardS(3,1)}
        {this._cardS(4,1)}
        {this._cardS(5,1)}
        {this._cardS(6,1)}
        {this._cardS(7,1)}
        {this._cardS(8,1)}
        {this._cardS(9,1)}
        {this._cardS(10,1)}
        {this._cardS(11,1)}
        {this._cardS(12,1)}
        {this._cardS(13,1)}
      </View>
      <View style={styles.copas}>
        {this._cardS(1,2)}
        {this._cardS(2,2)}
        {this._cardS(3,2)}
        {this._cardS(4,2)}
        {this._cardS(5,2)}
        {this._cardS(6,2)}
        {this._cardS(7,2)}
        {this._cardS(8,2)}
        {this._cardS(9,2)}
        {this._cardS(10,2)}
        {this._cardS(11,2)}
        {this._cardS(12,2)}
        {this._cardS(13,2)}
      </View>
      <View style={styles.espadas}>
        {this._cardS(1,3)}
        {this._cardS(2,3)}
        {this._cardS(3,3)}
        {this._cardS(4,3)}
        {this._cardS(5,3)}
        {this._cardS(6,3)}
        {this._cardS(7,3)}
        {this._cardS(8,3)}
        {this._cardS(9,3)}
        {this._cardS(10,3)}
        {this._cardS(11,3)}
        {this._cardS(12,3)}
        {this._cardS(13,3)}
      </View>
      <View style={styles.paus}>
        {this._cardS(1,4)}
        {this._cardS(2,4)}
        {this._cardS(3,4)}
        {this._cardS(4,4)}
        {this._cardS(5,4)}
        {this._cardS(6,4)}
        {this._cardS(7,4)}
        {this._cardS(8,4)}
        {this._cardS(9,4)}
        {this._cardS(10,4)}
        {this._cardS(11,4)}
        {this._cardS(12,4)}
        {this._cardS(13,4)}
      </View>
    </View>
  );
};

export default Selector;