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
            <Image style={styles.thumbnail} source={{uri: this.props.drip.creative.banner_thumb_url}} />
            <Text>{this.props.drip.creative.name}</Text>
          </View>
        </TouchableHighlight>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  thumbnail: {
    width: 310,
    height: 100,
    margin: 1,
  },

});

module.exports = DripCell;







