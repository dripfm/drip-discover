'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = React;

var DripCell = React.createClass({
  render: function() {
    console.log(this.props.drip);
    return(
        <TouchableHighlight onPress={this.props.onSelect}>
          <View style={styles.container}>
            <Text>{this.props.drip.creative.name}</Text>
          </View>
        </TouchableHighlight>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  thumbnail: {
    width: 310,
    height: 310,
    margin: 1,
  },

});

module.exports = DripCell;







