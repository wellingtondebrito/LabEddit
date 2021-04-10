import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from 'react-router-dom'
import { FormContainer, Logo, TextField, ButtonSign, SignUpButton } from './FormStyles'

const SignUpForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            history.push("/")
        }
    },[history])

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    const handleUserName = (event) =>{
        setUserName(event.target.value)
    }

    const goSignUp = (event) => {

        event.preventDefault()

        const body = {
            email: email,
            password: password,
            username: userName
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body)
            .then((response)=>{
                localStorage.setItem("token", response.data.token)
                history.push("/feeds")
            }).catch((error)=>{
                console.log(error)
            })
     }

     const goLogin = () =>{
         history.push("/login")
     }


    return(
        <FormContainer onSubmit={goSignUp}>
            <Logo>
                <h3>LabEddit</h3>
            </Logo>
            <TextField
                name="username"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={handleUserName}
                required
            />
            <TextField
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={handleEmail}
                required
            />
            <TextField
                name="senha"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={handlePassword}
                required
            />
            <ButtonSign>Cadastrar</ButtonSign>
            <SignUpButton onClick={goLogin}>Possuí uma conta? Faça Login!</SignUpButton>
        </FormContainer>
    )
}

export default SignUpForm