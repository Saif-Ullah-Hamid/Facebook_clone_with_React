import React from 'react'
import image from "../assets/saif.jpg"
import { CloseBtn, LikeShareAndCommentCounts, LikeShareCommentBtns, PostContent, PostImage, ProfileAtPost,ThreeDots } from './Post'
import { CommentBody } from './Small_components'
import { useState } from 'react'
const Comment = (props) => {

    const [commentArray,setCommentArray] = useState([])
    const [commentContent, setCommentContent] = useState('')
    const [isComment,setIsComment] = useState(false)



    const RenderComments = () => {
        const commentsContainer = document.getElementById("commentsContainer")
        const commentComponents = []
        const comment = <CommentBody image={image}/>

        for(let i = 0;i < commentArray.length;i++){
            commentComponents.push(<CommentBody image={image} body = {commentArray[i]}/>)
        }

        return(
            <div>
                {commentComponents}
            </div>
        )
    }

    const sendComment = () => {

        setIsComment(true)
        setCommentArray([...commentArray,commentContent])
        console.log(commentArray)
    }

    

    return(
        <>
        <div id="overlay"></div>
        
        <div className='commentPopup' >
            <div style={{padding:'10px',width:"54%", borderBottom:'1.2px solid black',backgroundColor:'rgb(214, 214, 214)',zIndex:'9999',display:'flex',justifyContent:'flex-end',marginBottom:"10px",position:"fixed",top:'10%',borderTopRightRadius:"9px"}}>
                <h2 style={{fontWeight:"700",margin:"0 250px 0 0"}}>{props.userName}'s Post</h2>
                <CloseBtn close = {props.close}/>
            </div>
            <span style={{display:"flex",justifyContent:"space-between",alignItems:'start',marginTop:"60px"}}>
                <ProfileAtPost userName="Saif Ullah" postDuration="5d"/>
                <ThreeDots />
            </span>
            <PostContent/>
            <PostImage/>
            <LikeShareAndCommentCounts likesCounts={props.likesCounts} commentCounts={props.commentCounts} shareCounts = {props.shareCounts}/>
            <LikeShareCommentBtns like = {props.like} comment = {props.comment} share = {props.share} close = {props.close} />

            <div style={{width:"55%", height:'110px', backgroundColor:'rgb(214, 214, 214)',display:"flex",justifyContent:"center", alignItems:'center', position:"fixed",bottom:'7.2%'}}>
                <ProfileAtPost/>
                <div style={{width:'80%',height:'80px',padding:"10px", backgroundColor:'rgb(200, 200, 200)',borderRadius:"15px",display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
                    <span className='commentInputContents'>
                        <input type="text" name="commentedText" onChange={(e) => setCommentContent (e.target.value) } style={{width:"70%",backgroundColor:"rgb(200, 200, 200)",border:"none",outline:"none"}} />
                        <span>icons</span>
                    </span>
                    <span className='commentInputContents'>
                        <span>Icons</span>
                        <span onClick={sendComment}>Send</span>
                    </span>
                </div>
            </div>

            <div id='commentsContainer' style={{marginTop:'5px',borderTop:"1px solid black",padding:"10px 5px"}}>

               
               <RenderComments/>
                {/* <CommentBody image ={image} />
                <CommentBody image ={image} /> */}
                
                
                </div>
            <div style={{height:'25%'}}></div>
        </div>
        
        </>
    )
    

}

export default Comment;