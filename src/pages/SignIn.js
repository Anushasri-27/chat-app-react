import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
  const SignInWithProvider = async (provider) => {
     //SignInWithPOPUP is a promiese
     try {
         const {additionalUserInfo ,user} = await auth.signInWithPopup(provider);
         if(additionalUserInfo.isNewUser){
          await  database.ref(`/profiles/${user.uid}`).set(
                {
                    name:user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                }
            )  //ref-->path to database under which we will store data
         }
       
         Alert.success('Signed In',4000);
     } catch (err) {
        Alert.error(err.message,4000);
     }
  };
  const onFacebookSignIn = () => {
    SignInWithProvider(new firebase.auth.FacebookAuthProvider())
  };
  const onGoogleSignIn = () => {
    SignInWithProvider(new firebase.auth.GoogleAuthProvider())
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>welcome to chat</h2>
                <p>progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Icon icon="facebook" /> Continue With facebook
                </Button>
                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue With Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
