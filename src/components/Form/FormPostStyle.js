import styled from 'styled-components'

export const PubContainer = styled.div`
    border: 0.5px solid #ededed;
    border-radius: 16px;
    height: 200px;
    width: 700px;
    margin-top: 32px;
    background-color: #ffffff;
    box-shadow: 1px 2px 6px #adabab;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormField = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
    
    
`
export const TitleField = styled.input`
    width: 550px;
    height: 35px;
    border-radius: 16px;
    border: none;
    background-color: #edeeef; 
    padding: 8px; 
`
export const TextForm = styled.textarea`
    width: 550px;
    height: 60px;
    margin-top: 8px;
    border-radius: 16px;
    background-color: #edeeef; 
    padding: 8px; 
    border: none;
`
export const ButtonComments = styled.button`
    background-color: #DADFE6;
    border: none;
    width: 560px;
    margin-top: 8px;
    height: 45px;
    color: #ffff;
    font-size: 16px;
    padding: 8px;
    cursor: pointer;
    border-radius: 9px;
`