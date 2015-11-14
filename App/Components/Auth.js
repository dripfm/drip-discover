// add input boxes for username and password
// add labels
// add a button to submit the form
// submit the username/password to our api
// if authorized, the return package should include the list of drips the member is subscribed to
// if it fails, display an error on the screen

var React = require('react-native');
var api = require('../Utils/api');
var Main = require('./Main');


var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  NavigatorIOS,
} = React;

var Auth = React.createClass({

  getInitialState: function() {
    return {
      email: '',
      password: '',
    };
  },
  updateEmail: function(text) {
    this.setState({
      email: text,
    });
  },
  updatePassword: function(text) {
    this.setState({
      password: text,
    });
  },
  handleSubmit: function(){
    api.signIn(this.state.email, this.state.password)
    .then((res) => {
      console.log(res);
      if(res.errors === 'Invalid email or password - or did you sign up with Facebook?'){
          this.setState({
            error: 'Incorrect email or password',
            isLoading: false
          })
        } else {
          this.setState({
            error: '',
            user: res,
            loaded: true
          })
          this.navigateToDash(this.state.user);
        }
    });
  },
  navigateToDash: function(user) {
    this.props.navigator.push({
      title: "Next Screen",
      component: Main,
      passProps: {user: user}
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
          <TextInput
              placeholder="email"
              autoFocus="true"
              style={{height: 40, padding: 10, borderColor: "#EEEEFF", borderWidth: 1, marginBottom: 10}}
              value={this.state.text}
              onChange={(event) => this.updateEmail(event.nativeEvent.text)}
          />

          <TextInput
              placeholder="password"
              secureTextEntry="true"
              style={{height: 40, padding: 10, borderColor: "#eeeeff", borderWidth: 1}}
              value={this.state.text}
              onChange={(event) => this.updatePassword(event.nativeEvent.text)}

          />

          <TouchableHighlight
            style={styles.button}
            onPress={(event) => this.handleSubmit()}
            underlayColor="white">
            <Text style={styles.buttonText}>sign in</Text>
          </TouchableHighlight>
      </View>
    );
  },


});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  label: {
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
  },
});

module.exports = Auth;