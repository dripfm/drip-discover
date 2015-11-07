'use strict';

var React = require('react-native');
var api = require('../../Utils/api');

var {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image,
} = React;

var Posts = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
      api.getFeed(80)
      .then((res) => {
        if(res.errors === 'Not Found'){
          this.setState({
            error: 'Drip not found',
            isLoading: false
          })
        } else {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(res.data),
            loaded: true
          })
        }
      });
  },

  renderListView: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPostCell}
        style={styles.listView} />
    );
  },

  renderPostCell: function(post) {
    console.log(post.data)
    if(post.data.klass == 'Release') {
      if (post.data.cover.cover.email_thumb.url) {
        var img = post.data.cover.cover.email_thumb.url
      } else {
        var img = "https://www.google.com/logos/doodles/2015/adolphe-saxs-201st-birthday-6443879796572160-5665117697998848-ror.jpg"
      }
      return(
          <TouchableHighlight onPress={this.props.onSelect}>
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={{uri: img}} />
              <Text style={styles.post}>{post.data.title}</Text>
            </View>
          </TouchableHighlight>
      );
    } else {
      if (post.data.type == 'YouTubePost') {
        var img = post.data.thumbnail_url
      } else if (post.data.type == 'SoundCloudPost') {
        var img = post.data.thumbnail_url
      } else if (post.data.type == 'PhotoPost') {
        if (post.data.images) {
          var img = post.data.images[0].url
        } else {
          var img = "https://www.google.com/logos/doodles/2015/adolphe-saxs-201st-birthday-6443879796572160-5665117697998848-ror.jpg"
        }
      }
      return(
          <TouchableHighlight onPress={this.props.onSelect}>
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={{uri: img}} />
              <Text style={styles.post}>{post.data.title}</Text>
            </View>
          </TouchableHighlight>
      );
    }
  },

  render: function() {
    if(!this.state.loaded) {
      return(
        <View style={styles.container}>
          <Text>Loading drips...</Text>
        </View>
      );
    }
    return(
      this.renderListView()
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  listView: {
    paddingTop: 80,
    backgroundColor: '#FFFFFF',
  },
  thumbnail: {
    width: 310,
    height: 310,
    margin: 1,
  },
  post: {
    padding: 3,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: '#000'
  }

});

module.exports = Posts;