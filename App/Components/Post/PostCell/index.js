/*
Coded by: Simar (github.com/iSimar)
GitHub Project: https://github.com/iSimar/HackerNews-React-Native
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = React;

var PostCell = React.createClass({
  render: function() {
    if(this.props.post.data.klass == 'Release') {
      if (this.props.post.data.cover.cover.email_thumb.url) {
        var img = this.props.post.data.cover.cover.email_thumb.url
      } else {
        var img = "https://www.google.com/logos/doodles/2015/adolphe-saxs-201st-birthday-6443879796572160-5665117697998848-ror.jpg"
      }
      return(
          <TouchableHighlight onPress={this.props.onSelect}>
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={{uri: img}} />
              <Text style={styles.post}>{this.props.post.data.title}</Text>
            </View>
          </TouchableHighlight>
      );
    } else {
      if (this.props.post.data.type == 'YouTubePost') {
        var img = this.props.post.data.thumbnail_url
      } else if (this.props.post.data.type == 'SoundCloudPost') {
        var img = this.props.post.data.thumbnail_url
      } else if (this.props.post.data.type == 'PhotoPost') {
        if (this.props.post.data.images) {
          var img = this.props.post.data.images[0].url
        } else {
          var img = "https://www.google.com/logos/doodles/2015/adolphe-saxs-201st-birthday-6443879796572160-5665117697998848-ror.jpg"
        }
      }

      return(
          <TouchableHighlight onPress={this.props.onSelect}>
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={{uri: img}} />
              <Text style={styles.post}>{this.props.post.data.title}</Text>
            </View>
          </TouchableHighlight>
      );
    }
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

module.exports = PostCell;







