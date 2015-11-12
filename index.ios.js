/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Auth = require('./App/Components/Auth');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var DripPassionFruit = React.createClass({

  render: function() {
      return (
        <NavigatorIOS
          style={ styles.container }
          initialRoute={{
            title: 'Drip',
            component: Auth,
          }} />
        )
  }

});


var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
});


AppRegistry.registerComponent('DripPassionFruit', () => DripPassionFruit);
