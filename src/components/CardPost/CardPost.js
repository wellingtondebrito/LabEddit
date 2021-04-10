import React from 'react'
import { AllIcons, PostCard, FeedsContainer, IconsComments, IconsVote, Texts, Feeds } from './StyleCard'
import Dow from '../../assets/down-arrow.svg'
import Up from '../../assets/up-arrow.svg'
import Comments from '../../assets/comments.svg'
import ViewPost from '../../assets/add.svg'
import VoteLike from '../../assets/up-blue.svg'
import Disliked from '../../assets/down-red-arrow.svg'
import axios from 'axios'


const CardPost = (props) => {
  

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
            props.updateVote()
            
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const Like = () => {
        
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


    return(
        
            <PostCard>
                <Texts>
                    <h4>{props.userName}</h4>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Texts>
                <AllIcons>
                    <IconsVote>
                        {Like()}
                    </IconsVote>
                    <IconsComments>
                        <img
                         src={ViewPost}
                         onClick={props.viewPost}
                         />
                        <img src={Comments}/>
                        <p>{props.comments}</p>
                        
                    </IconsComments>
                </AllIcons>
            </PostCard>
        
        
    )
}

export default CardPost