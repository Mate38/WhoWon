import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardSelect } from '../../actions/CardsActions';
import { allSelect } from '../../functions/allSelect';
import { styles } from './styles';
import { View } from 'react-native';
import Card from '../../components/cards';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount = () => {
    allSelect(this.props.selectCards);
  }

  _cardH = (posicao) => (
    <Card
      posicao = {posicao}
      altura = {90} 
      largura = {55}
      margem = {[10]}
      rota = 'selector' />
  );

  render() {
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
  }
  
};

const mapStateToProps = (state) => {
  return { selectCards: state.CardsReducer };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ cardSelect }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
