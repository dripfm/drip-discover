// add input boxes for username and password
// add labels
// add a button to submit the form
// submit the username/password to our api
// if authorized, the return package should include the list of drips the member is subscribed to
// if it fails, display an error on the screen

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
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
    // POST TO STAGING TO TRY AND SIGN IN
    // var url = `https://drip-creator.firebaseio.com/christopher-willits.json`;
    var url = `https://staging.drip.com/login`;
    var credentials = {
      email: this.state.email,
      password: this.state.password,
    }
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(credentials)
      })
      .then((res) => res.json())
      .then(
        this.setState({
          isLoading: true,
        })
      )
      .then(
        // REDIRECT THEM TO THE MAIN.JS FILE
        // PASS ALONG THE DRIPS THEY HAVE
        // SHOW A LOADER AND FETCH THEIR SUBSCRIPTIONS
      )
      .catch((error) => {
        console.log('Request failed', error);
        this.setState({error})
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