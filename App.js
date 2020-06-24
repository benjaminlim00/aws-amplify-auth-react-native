import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

//setup
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

class App extends React.Component {
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user:', user);
  }
  signOut = () => {
    Auth.signOut()
      .then(() => this.props.onStateChange('signedOut'))
      .catch((err) => console.log('err: ', err));
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Text onPress={this.signOut}>Sign Out</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
  },
});

export default withAuthenticator(App);
