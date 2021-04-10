import React,{useState} from 'react'
import axios from 'axios'
import { AllIcons, ButtonComments, CommentField, CommentForm, Comment, IconsComments, IconsVote, OnePost, PostsContainer, ContainerComment } from './style'
import Dow from '../../assets/down-arrow.svg'
import Up from '../../assets/up-arrow.svg'
import Comts from '../../assets/comments.svg'
import VoteLike from '../../assets/up-blue.svg'
import Disliked from '../../assets/down-red-arrow.svg'
import {BASE_URL} from '../../constants/ApiUrl'
import NewComments from './NewComments'



const CommentsCard = (props) => {

    const [form, setForm] = useState({text:""})

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const createComment = (event) => {

        event.preventDefault()

        const body = {
            text: form.text
        }
         axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/comment`, body,{
             headers:{
                 Authorization: localStorage.getItem('token')
             }
         }).then(()=>{
             alert("Comentário criado!")
             props.update()
         }).catch((error)=>{
             console.log(error.message)
         })
    }

    const votePost = (rate) => {
        const body = {
            direction: rate
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log("Funcionou")
            props.update()
            
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const voteComm = (rate) =>{
        const body = {
            direction: rate
        }
        axios.put(`${BASE_URL}/posts/${props.id}/comment/${props.commentsId}/vote`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(()=>{
            console.log('Funcionou!!')
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const LikePost = () => {
        
        if(props.voteDirection === 0){
            return (
                <>
                    <img src={Dow} onClick={()=>{votePost(-1)}}/>
                    <p>{props.votes}</p>
                    <img src={Up} onClick={()=>{votePost(1)}}/>
                </>
            )
        }else if (props.voteDirection === 1 ){
            return (
                <>
                    <img src={Dow} onClick={()=>{votePost(-1)}}/>
                    <p>{props.votes}</p>
                    <img src={VoteLike} onClick={()=>{votePost(0)}}/>
                </>
            )
        }else{
            return (
                <>
                 <img src={Disliked} onClick={()=>{votePost(0)}}/>
                  <p>{props.votes}</p>
                  <img src={Up} onClick={()=>{votePost(1)}}/>
                </>
            )
        }
    }

    const LikeComment = () => {
        
        if(props.commentsVote === 0){
            return (
                <>
                    <img src={Dow} onClick={()=>{voteComm(-1)}}/>
                    <p>{props.votesCount}</p>
                    <img src={Up} onClick={()=>{voteComm(1)}}/>
                </>
            )
        }else if (props.commentsVote === 1 ){
            return (
                <>
                    <img src={Dow} onClick={()=>{voteComm(-1)}}/>
                    <p>{props.votesCount}</p>
                    <img src={VoteLike} onClick={()=>{voteComm(0)}}/>
                </>
            )
        }else{
            return (
                <>
                 <img src={Disliked} onClick={()=>{voteComm(0)}}/>
                  <p>{props.votesCount}</p>
                  <img src={Up} onClick={()=>{voteComm(1)}}/>
                </>
            )
        }
    }

          return(
        <>
            <PostsContainer>
                <OnePost>
                    <h4>{props.username}</h4>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </OnePost>
                
                <AllIcons>
                    <IconsVote>
                        {LikePost()}
                    </IconsVote>
                <IconsComments>
                        <img src={Comts}/>
                        <p>{props.comments}</p>
                    </IconsComments>
                </AllIcons>
                <hr/>
                <CommentForm onSubmit={createComment}>
                    <CommentField
                        name="text"
                        type="text"
                        value={form.text}
                        onChange={handleInputChange}
                        placeholder="Deixe seu comentário!"
                    />
                    <ButtonComments>Comentar</ButtonComments>
                </CommentForm>
                    
            </PostsContainer>
            <ContainerComment>
                {props.newsComments && (
                    props.newsComments.map((comm)=>{
                        return(
                            <NewComments
                                key={comm.id}
                                user={comm.username}
                                text={comm.text}
                                idComment={comm.id}
                                voteDirection={comm.userVoteDirection}
                                voteCount={comm.votesCount}
                                postId={props.id}
                                                            
                            />
                        )
                    })
                )} 
             </ContainerComment>
        </>       
       

      )  
}

export default CommentsCard