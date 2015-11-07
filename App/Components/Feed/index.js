'use strict';

var React = require('react-native');
var api   = require('../../Utils/api');
var FeedCell  = require('../Feed/FeedCell');
var Post  = require('../Post');


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
        renderRow={this.renderFeedCell}
        style={styles.listView} />
    );
  },

  renderFeedCell: function(post){
    return(
      <FeedCell
        onSelect={() => this._selectPost(post)}
        post={post}/>
    );
  },

  _selectPost: function(post){
    this.props.navigator.push({
      title: post.data.title,
      component: Post,
      passProps: {post: post.data}
    });
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