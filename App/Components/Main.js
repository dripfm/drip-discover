var React = require('react-native');
var api = require('../Utils/api');
var Feed = require('./Feed')
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS,
  PickerIOS
} = React;

var PickerItemIOS = PickerIOS.Item;

var DRIPS = {
  discover: {
    name: 'Discover',
    dripId: 80,
  },
  ghostly: {
    name: 'Ghostly',
    dripId: 1,
  },
  st: {
    name: 'Stones Throw',
    dripId: 5,
  },
  fg: {
    name: 'Fool\'s Gold',
    dripId: 4,
  },
  md: {
    name: 'Mad Decent',
    dripId: 3,
  },
};

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      initialDrip: 'ghostly',
      dripId: 1,
    }
  }

  handleClick(val) {
    console.log(val);
    this.props.navigator.push({
      title: val.name,
      component: Feed,
      passProps: { dripId: val.dripId }
    });
  }

  render() {
    var drip = DRIPS[this.state.initialDrip];
    var selectionString = drip.name + ' ' + drip.dripId;

    return (
      <View>
        <Text>Please choose a Drip:</Text>
        <PickerIOS
          selectedValue={this.state.initialDrip}
          onValueChange={(initialDrip) => this.handleClick(DRIPS[initialDrip])}>
          {Object.keys(DRIPS).map((initialDrip) => (
            <PickerItemIOS
              key={initialDrip}
              value={initialDrip}
              label={DRIPS[initialDrip].name}
            />
            )
          )}
          </PickerIOS>
      </View>
    );
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