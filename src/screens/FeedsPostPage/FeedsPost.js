import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'
import { Feeds, Forms } from './FeedsStyles'
import CardPost from "../../components/CardPost/CardPost"
import  PostForm  from '../../components/Form/PostForm'



const FeedsPostPage = () => {

    const [posts, setPosts] = useState([])
    
    const history = useHistory()
    
    useProtectedPage()

    useEffect(()=>{
        getPost()
    },[])

  
    const getPost = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then((response)=>{
            setPosts(response.data.posts)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const detailPost = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(()=>{
            
            history.push(`/post/${id}`)
        }).catch((erro)=>{
            console.log(erro)
        })
            
    } 


    

    return(
        <>
            <Forms>
                <PostForm
                    newPost={getPost}
                />
            </Forms>
            <Feeds>
            {
                posts && (
                    posts.map((post)=>{
                        return(
                            <CardPost
                              key={post.id}
                              userName={post.username}
                              title={post.title}
                              text={post.text}
                              comments={post.commentsCount}
                              votes={post.votesCount}
                              viewPost={()=>detailPost(post.id)}
                              id={post.id}
                              updateVote={getPost} 
                              voteDirection={post.userVoteDirection}                           
                                                        
                            />     
                        )
                    })
                )
               
            }
            </Feeds>
            

        </>
    )
}

export default FeedsPostPage