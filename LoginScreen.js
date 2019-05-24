import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import * as firebase from 'firebase';

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBtZmzNH2xuR5Jcx6ylHg7Btj5s9pc_oq8",
  authDomain: "myqiblat-firebase-e25b8.firebaseapp.com",
  databaseURL: "https://myqiblat-firebase-e25b8.firebaseio.com",
  projectId: "myqiblat-firebase-e25b8",
  storageBucket: "myqiblat-firebase-e25b8.appspot.com",
  messagingSenderId: "532677538251",
  appId: "1:532677538251:web:a2051c1e0a684a5c"
};

firebase.initializeApp(firebaseConfig);

import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'

export default class LoginScreen extends Component{

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: '',
    })
  }

  signUpUser = (email, password) => {

    try{

      if(this.state.password.length < 6)
      {
        alert("Please enter atleast 6 character")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try{

      //firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){console.log(user)
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {this.props.navigation.navigate('Home')})
    }
    catch (error){
      console.log(alert("Incorrect Email or Password"))
    }
  }

  render(){
    return(
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
              />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(passsword) => this.setState({passsword})}
              />
          </Item>

          <Button style={{marginTop: 10}}
            full
            rounded
            success
            onPress={()=> this.loginUser(this.state.email, this.state.passsword)}
            //onPress={() => this.props.navigation.navigate('Home')} title="Home"
          >
          <Text style={{color: 'white'}}>Login</Text>
          </Button>

          <Button style={{marginTop: 10}}
            full
            rounded
            primary
            onPress={()=> this.signUpUser(this.state.email, this.state.password)}
          >
          <Text style={{color: 'white'}}>Sign Up</Text>
          </Button>

        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
}); 