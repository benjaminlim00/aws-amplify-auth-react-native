import React, {useState} from 'react'
import { Auth } from 'aws-amplify';

const App  = () => {
  // state = {
  //   username: '',
  //   password: '',
  //   phone_number: '',
  //   email: '',
  //   authCode: '',
  //   user: {},
  // };

  const [password, setUsername] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [authCode, setAuthCode] = useState('')
  const [user, setUser] = useState({})


  async const signUp = () =>  {
    await Auth.signUp({
      email,
      password,
      attributes: { email, number },
    });
    console.log('sign up successful!');
  }
  async const confirmSignUp = () => {
    await Auth.configSigningUp(email, authCode);
    console.log('confirm sign up successful!');
  }
  async const signIn = () => {
    const user = await Auth.signIn(email, password);
    setUser(user)
    console.log('sign in successful!');
  }
  async const confirmSignIn = ()=> {
    await Auth.configSigningIn(email, authCode);
    console.log('user now successfully signed in to the app!!');
  }
  render() {
    // render method
  }
}

export default App
