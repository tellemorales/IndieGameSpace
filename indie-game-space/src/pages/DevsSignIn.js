//developers sign in page

import React from 'react'
import TopFiller from '../components/TopFiller/TopFiller';
import { FormContent, FormInput, FormWrap,
        Icon, Form, FormH1, FormButton,
        FormLabel, Container, Text } from './DevsSignIn.elements';

const DevsSignIn = () => {
  return (
    <>
      <TopFiller />
      <Container>
        <FormWrap>
          {/* <Icon to="/"> IndieGameSpace </Icon> */}
          <FormContent>
            <Form action='#'>
              <FormH1> Sign In to your Account </FormH1>
              <FormLabel htmlFor='for'> Email </FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'> Password </FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit'> Continue </FormButton>
                <Text> Forgot Password? </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default DevsSignIn;