import React,{useEffect, useState} from 'react'
import  {useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'
import CommentsCard from '../../components/CardComments/CardComments'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../../constants/ApiUrl'
import { PostPageContainer } from './PostPageStyles'
import NewComments from '../../components/CardComments/NewComments'




const PostPage = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const pathParams = useParams()
    const id = pathParams.id

    useProtectedPage()

    useEffect(()=>{
        postDetails()
    },[])

    const postDetails = () => {
        axios.get(`${BASE_URL}/labEddit/posts/${id}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res)=>{
            setPost(res.data.post)
            setComments(res.data.post.comments)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
 
    
    return(
        
            <PostPageContainer>
                <CommentsCard
                    username={post.username}
                    text={post.text}
                    title={post.title}
                    id={post.id}
                    comments={post.commentsCount}
                    votes={post.votesCount}
                    newsComments={comments}
                    voteDirection={post.userVoteDirection}
                    update={postDetails}
                    commentsId={comments.id}
                    commentsVote={comments.userVoteDirection}
                    votesCount={comments.votesCount}
                />
                
            </PostPageContainer>
        
                  
    )
}

export default PostPage