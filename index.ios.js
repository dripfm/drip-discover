/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var DripPassionFruit = React.createClass({

  getInitialState: function() {
      return {
        creative: null,
      };
    },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch("http://drip.com/api/creatives/80")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          creative: responseData.data,
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.creative) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            loading...
          </Text>
        </View>
        )
    }
    var creative = this.state.creative;
    return (

      <TouchableHighlight onPress={this.testClick}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to {creative.name}!
          </Text>
        </View>
      </TouchableHighlight>
    );
  },

  testClick: function() {
    console.log("touched!");
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#481090',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DripPassionFruit', () => DripPassionFruit);
