import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardSelect } from '../../actions/CardsActions';
import { allSelect } from '../../functions/allSelect';
import { styles } from './styles';
import { View, Text } from 'react-native';
import Card from '../../components/cards';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handOne: null,
      handTwo: null
    };
  };

  componentDidMount = () => {
    //console.log(allSelect(this.props.selectCards));
    var op = allSelect(this.props.selectCards);

    if(op == 1){
      this.setState({
        handOne: 'WINNER',
        handTwo: 'LOSER'
      })
    }else if(op == 2){
      this.setState({
        handOne: 'LOSER',
        handTwo: 'WINNER'
      })
    }else if(op == 3){
      this.setState({
        handOne: 'SPLIT',
        handTwo: 'SPLIT'
      })
    }else{
      this.setState({
        handOne: null,
        handTwo: null
      })
    }
  }

  _cardH = (posicao) => (
    <Card
      posicao = {posicao}
      altura = {95} 
      largura = {60}
      margem = {[5]}
      rota = 'selector' />
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Who Won The Hand?</Text>
        <Text style={styles.descriptionText}>Hand 1</Text>
        <View style={styles.playerOneCards}>
          {this._cardH(11)}
          {this._cardH(12)}
        </View>
        <Text style={styles.messageText}>{this.state.handOne}</Text>
        <Text style={styles.descriptionText}>Community Cards</Text>
        <View style={styles.communityCards}>
          {this._cardH(31)}
          {this._cardH(32)}
          {this._cardH(33)}
          {this._cardH(34)}
          {this._cardH(35)}
        </View>
        <Text style={styles.descriptionText}>Hand 2</Text>
        <View style={styles.playerTwoCards}>
          {this._cardH(21)}
          {this._cardH(22)}
        </View>
        <Text style={styles.messageText}>{this.state.handTwo}</Text>
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
