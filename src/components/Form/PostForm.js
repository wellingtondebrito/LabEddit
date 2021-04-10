import React,{useState} from 'react'
import { ButtonComments, FormField, PubContainer, TextForm, TitleField } from './FormPostStyle'
import axios from  'axios'

const PostForm = (props) => {

    const [form, setForm] = useState({text:"", title:""})

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const createPost = (event) => {
        event.preventDefault()

        const body = {
            text: form.text,
            title: form.title
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(()=>{
            alert("Post cadastrado!")
            props.newPost()
            
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    
    return(
       <PubContainer>
           <FormField onSubmit={createPost}>
               <TitleField
                name="title"
                type="text"
                placeholder="Titulo do Post"
                value={form.title}
                onChange={handleInputChange}
                required
               />
               <TextForm
                name="text"
                type="text"
                placeholder="No que está pensando?"
                value={form.text}
                onChange={handleInputChange}
               />
               <ButtonComments>Publicar</ButtonComments>
           </FormField>
       </PubContainer> 
    )
}

export default PostForm