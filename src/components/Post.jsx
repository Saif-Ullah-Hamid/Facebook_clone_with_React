import React from 'react'
import image from "../assets/saif.jpg"
// import {LikeShareCommentBtns,LikeShareAndCommentCounts,ProfileAtPost,FollowBtn,ThreeDots,CloseBtn,PostContent,PostImage} from '.'


export const CloseBtn = (props) => {
    return(
        <button className="styleBtn" style={{padding:'5px 8px'}} onClick={props.close}>X</button>
    )
}


export const ThreeDots = (props) => {
    return(
        <button className="styleBtn" style={{marginRight:'15px',padding:"5px 8px"}} onClick={props.threeDots}>...</button>
    )
}

export const FollowBtn = (props) => {
    return(
        <button className="styleBtn" style={{color:'#2c62f7', fontWeight:"700",padding:"5px 8px", marginLeft:'10px',marginBottom:"2px"}} onClick={props.follow} id='followBtn'>{props.isFollow ? "Following" : "Follow"}</button>

    )
}

export const ProfileAtPost = (props) => {
    return(
    
         <span className='Post_header_first_3_elements'>
        <img src={image} alt="" style={{borderRadius:"100%",width:'60px', height:'60px', objectFit:'cover',marginBottom:"2px"}} />
        <span style={{marginLeft:'10px',marginTop:'10px'}}>
            <span style={{fontWeight:"700"  }}>{props.userName}</span>
            {props.children}
            <p style={{fontSize:"12px",marginTop:'0px'}}>{props.postDuration} . </p>
        </span>
        </span>

    )
}

export const LikeShareAndCommentCounts = (props) => {
    return(
        <span style={{display:"flex",justifyContent:'space-between' , fontSize:"12px", marginBottom:"10px" , marginTop:'5px' }}>
                <p style={{margin:"0"}}>{props.likesCounts}</p>
                <span >
                    <span>{props.commentCounts}comments</span>
                    <span style={{marginLeft:'10px'}}>{props.shareCounts}shares-count </span>
                </span>
        </span>
    )
}

export const LikeShareCommentBtns = (props) => {
    return (
         <span className='post_footer_btns'>
                <button className="styleBtn" onClick={props.like} id='likeBtn' >Like</button>
                <button className="styleBtn" onClick={props.comment}>Comment</button>
                <button className="styleBtn" onClick={props.share}>Share</button>
        </span>
    )
}

export const PostContent = (props) => {
    return (
        <p>{props.postDescriptoin}here is the writen contents</p>
    
    )
}

export const PostImage = (props) => {
    return (
        <img src={image} alt="" style={{objectFit:"cover", width:"100%"}} />
        
    )
}


const Post = (props) => {
    return (
        <>
            <span className='post_header'>
                <span className='Post_header_first_3_elements'>
                   <ProfileAtPost userName={props.userName} postDuration={props.postDuration}><FollowBtn follow={props.follow} isFollow ={props.isFollow}/></ProfileAtPost>
                </span>

                <span style={{fontWeight:"700", color:'gray'}}>
                    <ThreeDots/>
                    <CloseBtn close = {props.close}/>
                </span>

            </span>
            <PostContent postDescriptoin={props.postDescriptoin}/>
            <PostImage />


            <LikeShareAndCommentCounts likesCounts={props.likesCounts} commentCounts= {props.commentCounts} shareCounts = {props.shareCounts}/>

            <LikeShareCommentBtns like = {props.like} comment = {props.comment} share = {props.share}/>
            
        </>
    )
}

export default Post;