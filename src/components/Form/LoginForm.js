import React, {useEffect, useState} from 'react'
import {  LoginContainer } from '../../screens/LoginPage/LoginStyles'
import {ButtonLogin, FormContainer,Logo,TextField, SignUpButton} from './FormStyles'
import {useHistory} from 'react-router-dom'
import axios from 'axios'



function LoginForm () {

    const [form, setForm] = useState({email:"", password:""})
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            history.push("/feeds")
        }
    },[history])

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const goToSignUp = () => {
        history.push("/cadastro")
    }

    const goLogin = (event) => {

        event.preventDefault()

        const body ={
            email: form.email,
            password: form.password
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
            .then((response)=>{
                localStorage.setItem("token", response.data.token)
                history.push("/")
            }).catch((error)=>{
                console.log(error)
            })
    }

    return(
       
            <FormContainer onSubmit={goLogin}>
                <Logo>
                    <h3>LabEddit</h3>
                </Logo>
                <TextField
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleInputChange}
                    required                
                />
                <TextField
                name="password"
                type="password"
                placeholder="Senha"
                value={form.password}
                onChange={handleInputChange}
                required
                
                />
                <ButtonLogin>Entrar</ButtonLogin>
                <SignUpButton onClick={goToSignUp}>Não possuí uma conta? Cadastre-se</SignUpButton>
           </FormContainer>
       
    )
}

export default LoginForm