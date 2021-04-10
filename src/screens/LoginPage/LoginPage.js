import React, { useEffect, useState } from 'react'
import LoginForm from '../../components/Form/LoginForm'
import { Container, LoginContainer } from './LoginStyles'


const LoginPage = () => {

    

    return(
        <Container>
            <LoginContainer>
                <LoginForm/>
            </LoginContainer>
        </Container>
       
    )
}

export default LoginPage