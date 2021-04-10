import React from 'react'
import { AllIcons, IconsVote, Comment } from './style'
import axios from 'axios'
import Dow from '../../assets/down-arrow.svg'
import Up from '../../assets/up-arrow.svg'
import Comts from '../../assets/comments.svg'
import ViewPost from '../../assets/add.svg'
import VoteLike from '../../assets/up-blue.svg'
import Disliked from '../../assets/down-red-arrow.svg'
import {BASE_URL} from '../../constants/ApiUrl'

const NewComments = (props) => {

    const voteComm = (rate) =>{
        const body = {
            direction: rate
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.postId}/comment/${props.idComment}/vote`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(()=>{
            console.log('Funcionou!!')
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const Like = () => {
        
        if(props.voteDirection === 0){
            return (
                <>
                    <img src={Dow} onClick={()=>{voteComm(-1)}}/>
                    <p>{props.voteCount}</p>
                    <img src={Up} onClick={()=>{voteComm(1)}}/>
                </>
            )
        }else if (props.voteDirection === 1 ){
            return (
                <>
                    <img src={Dow} onClick={()=>{voteComm(-1)}}/>
                    <p>{props.voteCount}</p>
                    <img src={VoteLike} onClick={()=>{voteComm(0)}}/>
                </>
            )
        }else{
            return (
                <>
                 <img src={Disliked} onClick={()=>{voteComm(0)}}/>
                  <p>{props.voteCount}</p>
                  <img src={Up} onClick={()=>{voteComm(1)}}/>
                </>
            )
        }
    }
    
    return(
        <>
            <Comment>
                <h4>{props.user}</h4>
                <p>{props.text}</p>
            </Comment>
            <AllIcons>
                <IconsVote>
                    {Like()}
                </IconsVote>
            </AllIcons>
        </>
    )
}

export default NewComments