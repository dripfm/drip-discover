var React = require('react-native');
var api = require('../Utils/api');
var DripCell = require("./dripCell");
var Feed = require('./Feed');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS,
  ListView,
} = React;

var Main = React.createClass({
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
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.user.memberships),
      loaded: true,
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

  renderListView: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderDripCell}
        style={styles.listView} />
    );
  },

  renderDripCell: function(drip){
    return(
      <DripCell
        onSelect={() => this.selectDrip(drip)}
        drip={drip}/>
    );
  },

  selectDrip: function(drip) {
    this.props.navigator.push({
      title: drip.creative.name,
      component: Feed,
      passProps: { dripId: drip.creative.id }
    });
  },
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = Main;