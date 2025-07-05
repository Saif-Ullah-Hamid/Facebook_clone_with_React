// import { useState , useEffect} from 'react'
// import './App.css'
// import Post from './components/Post'
// import Comment from './components/comment'
// import { LikeShareCommentBtns } from './components/Post'
// import { LikeShareAndCommentCounts } from './components/Post'
// import { ProfileAtPost } from './components/Post'
// import { FollowBtn } from './components/Post'
// import { ThreeDots } from './components/Post'
// import { CloseBtn } from './components/Post'
// import { PostContent } from './components/Post'
// import { PostImage } from './components/Post'

// function App() {
//   const [userName,setUserName] = useState()
//   const [postDuration,setPostDuration] = useState()
//   const [postDescriptoin,setPostDescriptoin] = useState()
//   const [likesCounts,setLikesCounts] = useState(0)
//   const [commentCounts,setCommentCounts] = useState(0)
//   const [shareCounts,setShareCounts] = useState(0)
//   const [isFollow,setIsFollow] = useState(false)
//   const [closeBtn, setCloseBtn] = useState(true)
//   const [isLike,setIsLike] = useState(true) 
//   const [isCommentClicked, setIsCommentClicked] = useState(false)

//   const follow = () => {
//     setIsFollow(!isFollow)
//     const followBtn = document.getElementById('followBtn')

//     if (isFollow) followBtn.style.color = "#2c62f7";
//     else followBtn.style.color = "rgb(83, 83, 83)";

//   }

//   const threeDots = () => {
//     console.log("three dots btn fired")
//   }

//   const close = (e) => {
//     const elem = e.target
//     console.log(elem.parentNode.parentNode.parentNode)
//     setCloseBtn(false)
//   }


//   const like = (e) => {
//     console.log()
//     setIsLike(!isLike)
//     const btn = e.target;

//     if (isLike) {
//       setLikesCounts(likesCounts + 1)
//       btn.style.color = "#2c62f7"
//     }

//     else {
//     setLikesCounts(likesCounts - 1)
//       btn.style.color="rgb(83, 83, 83)"
//     }

//   }



//   const comment = () => {

//     setCommentCounts(commentCounts + 1)
//     setIsCommentClicked(true)

//   }

//   const share = () => {
//     setShareCounts(shareCounts + 1)
//   }

//   const closeComment = () => {
//     setIsCommentClicked(false)
//   }


//   return (
//    <div className='main_container'>
//      { closeBtn ?  <div className='post'> <Post  
//              userName ="Saif Ullah"  
//              postDuration = "5d"
//             postDescriptoin="dalta ba da post mutaliq maloomat we"
//             likesCounts={likesCounts}
//             commentCounts = {commentCounts}
//             shareCounts = {shareCounts}
//             isFollow = {isFollow}
//             follow = {follow}
//             threeDots = {threeDots}
//             close = {close}
//             like = {like}
//             comment = {comment}
//             share = {share}
//             isLike = {isLike}> 
//             {/* <ProfileAtPost ><FollowBtn follow={follow} isFollow ={isFollow}/></ProfileAtPost>
//             <ThreeDots/>
//             <CloseBtn close={close}/>
//             <PostContent /> */}
//             <PostImage/>
//             <LikeShareAndCommentCounts likeCounts={likesCounts} commentCounts= {commentCounts} shareCounts = {shareCounts}/>
//             <LikeShareCommentBtns likesCounts ={likesCounts}/> 
//             </Post>
//             </div>
//             : <></>}

//             {isCommentClicked && <Comment userName="Saif Ullah" postDuration="5d" threeDots = {threeDots} close = {close} likesCounts={likesCounts} commentCounts= {commentCounts} shareCounts = {shareCounts} like = {like} comment = {comment}
//             share = {share}  />}

//     </div> 
//   ) 
// }

// export default App



import React from 'react';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/Login' exact={true} element={<Login/>} />
          <Route path='/Header' element={<Header/>} />
        </Routes>
      
    </div>
  );
}
export default App;