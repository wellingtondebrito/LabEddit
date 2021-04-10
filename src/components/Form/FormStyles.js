import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    border: 0.5px solid #ededed;
    width: 450px;
    height: 550px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

`

export const TextField = styled.input`
    border-radius: 5px;
    margin-top: 8px;
    width: 350px;
    height: 35px;
    border: none; 
    background-color: #edeeef; 
    padding: 8px; 
`
export const Logo = styled.div`
        
    h3{
        color: #FF4500;
        font-size: 32px;
        margin-top: 0;                
    }
`

export const ButtonLogin = styled.button`
    background-color: #FF4500;
    border: none;
    width: 350px;
    margin-top: 16px;
    height: 45px;
    border-radius: 5px;
    color: #ffff;
    font-size: 16px;
    padding: 8px;
    cursor: pointer;
`
export const SignUpButton = styled.p`
    
    border: none;
    margin-top: 16px;
    border-radius: 5px;
    color: #ff4500;
    font-size: 16px;
    padding: 8px;
    cursor: pointer;
`
export const ButtonSign = styled.button`
    background-color: #FF4500;
    border: none;
    width: 350px;
    margin-top: 16px;
    height: 45px;
    border-radius: 5px;
    color: #ffff;
    font-size: 16px;
    padding: 8px;
    cursor: pointer;
`