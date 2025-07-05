import React from "react"; 
import "../css/Header.css"
import {AiOutlineSearch, AiFillHome, AiOutlineWallet} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import {FaRegFlag, FaUsers, FaPlusCircle, FaFacebookMessenger, FaBell,FaFacebook} from 'react-icons/fa' 
import MainArea from "./MainArea";
import profileImg from '../assets/profile.png'


function Header(){
return(
<div className="HomePage">
<div className="header">

<div className="first-header">
<div className="logo">

<FaFacebook color="blue" fontSize="2.8rem" style={{height:"50px",padding:"1rem"}}/>
</div>

<div className="Search">
<AiOutlineSearch style={{height:"4rem"}}/>
<input placeholder="Search Facebook" type="Search"/>
</div>

<div className="middle-header">

<div className="Icon">
<AiFillHome fontSize="2.3rem" color="#1877f2"/>
</div>

<div className="Icon">
<FaRegFlag fontSize="2.3rem" />
</div>

<div className="Icon">
<MdOndemandVideo fontSize="2.3rem" />
</div>

<div className="Icon">
<FaUsers fontSize="2.3rem"/>
</div>

<div className="Icon">
<AiOutlineWallet fontSize= "2.3rem" />
</div>
</div>

<div className="third-header">
<div className="plus">
<FaPlusCircle fontSize="1.5rem"/>
</div>

<div className="plus">
<FaFacebookMessenger fontSize="1.5rem"/>
</div>

<div className="plus">
    <FaBell fontSize="1.5rem"/>
</div>

<div className="Pluss"></div>
<img src={profileImg} alt="dp" style= {{height:"50px", width:"50px", borderRadius:'50%'}}/>
</div>
</div>
</div>
<MainArea/>
</div>
)
}
export default Header