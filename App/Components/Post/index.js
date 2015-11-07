'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  ListView,
  ToucheableHighlight,
  Text,
  Image,
  ScrollView,
} = React;

var Post = React.createClass({

  render: function() {
    console.log(this.props.post);
    if(this.props.post.klass == 'Release') {
      if (this.props.post.cover.cover.email_thumb.url) {
        var img = this.props.post.cover.cover.email_thumb.url
      } else {
        var img = "https://www.google.com/logos/doodles/2015/adolphe-saxs-201st-birthday-6443879796572160-5665117697998848-ror.jpg"
      }
      return(
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={{uri: img}} />
              <Text style={styles.post}>{this.props.post.title}</Text>
              <Text style={styles.post}>{this.props.post.description}</Text>
            </View>
          </ScrollView>
      );
    } else {
      if (this.props.post.type == 'YouTubePost') {
        var img = this.props.post.thumbnail_url
      } else if (this.props.post.type == 'SoundCloudPost') {
        var img = this.props.post.thumbnail_url
      } else if (this.props.post.type == 'PhotoPost') {
        if (this.props.post.images) {
          var img = this.props.post.images[0].url
        } else {
          var img = "https://www.google.com/logos/doodles/2015/adolphe-saxs-201st-birthday-6443879796572160-5665117697998848-ror.jpg"
        }
      }

      return(
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={{uri: img}} />
              <Text style={styles.post}>{this.props.post.title}</Text>
              <Text style={styles.post}>{this.props.post.html}</Text>
            </View>
          </ScrollView>
      );
    }
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
    listView: {
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    paddingTop: 20,
  },
  thumbnail: {
    width: 310,
    height: 310,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: '500',
  },
  artist: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  }
});

module.exports = Post;
