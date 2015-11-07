var React = require('react-native');
var api = require('../Utils/api');
var Feed = require('./Feed')
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleClick() {
    this.setState({
      isLoading: true
    });
    api.getFeed(80)
      .then((res) => {
        if(res.errors === 'Not Found'){
          this.setState({
            error: 'Drip not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: "Drip Delivers",
            component: Feed,
            passProps: {dripPayload: res}
          });
          this.setState({
            isLoading: false,
            error: false,
          })
        }
      });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Choose a Drip</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleClick.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>Drip Delivers</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

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