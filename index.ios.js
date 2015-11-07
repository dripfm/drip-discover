/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

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
            component: Main,
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
