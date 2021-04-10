import styled from 'styled-components'



export const PostCard = styled.section`
    border: 0.5px solid #ededed;
    border-radius: 5px;
    height: 250px;
    width: 700px;
    margin-top: 32px;
    background-color: #ffffff;
    box-shadow: 1px 2px 6px #adabab;
    padding: 24px;
    

`

export const Texts = styled.div`
    h4{
        font-size: 12px;
    }

    h2{
        font-size: 24px;
    }

    p{
        font-size: 16px;
    }
`
export const AllIcons = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: -60px;
`

export const IconsVote = styled.div`
    display: flex;
    
    img{
        width: 16px;
        margin-left: 8px;
        cursor: pointer;
    }

    p{
        margin-left: 8px;
    }
`

export const IconsComments = styled.div`
    display: flex;
    
    img{
        width: 24px;
        margin-right: 8px;
        margin-left: 8px;
        cursor: pointer;
    }

    p{
        margin-right: 8px;
    }
`