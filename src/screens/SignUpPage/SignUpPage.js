import React from 'react'
import { SignUpContainer, Container } from './SignUpStyles'
import SignUpForm from '../../components/Form/SignUpForm'


const SignUpPage = () => {

    
    return(  
        <Container>
            <SignUpContainer>
                <SignUpForm />
            </SignUpContainer>
        </Container>
    )
}

export default SignUpPage