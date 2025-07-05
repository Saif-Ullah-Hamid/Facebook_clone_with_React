import React from "react"
import '../css/MainArea.css';
import { FaSearch, FaMedrt, FaFontAwesomeFlag, FaFacebookMessenger, FaUserFriends, FaShare, FaAngleDown, FaThumbsUp, FaCommentAlt } from 'react-icons/fa'
import { MdVideoCall, MdMoreHoriz } from 'react-icons/md'
import { AiFillFileImage, } from 'react-icons/ai'
import saifImg from '../assets/saif.jpg'
import profileImg from '../assets/profile.png'
import story1 from '../assets/story1.jpg'
import story2 from '../assets/story2.jpg'
import story3 from '../assets/story3.jpg'
import story4 from '../assets/story4.jpg'
import story5 from '../assets/story5.jpg'
import story6 from '../assets/story6.jpg'
import story7 from '../assets/story8.jpg'
import web from '../assets/web.jpg'
import mern from '../assets/mern.png'
import app from '../assets/app.jpg'
import graphic from '../assets/gd.jpg'








function MainArea() {
    return (
        <div className="Main">
            <div className="Rside">
                <div className="profile">
                    <img src={profileImg} alt="profile image" style={{ height:"50px", width:"50px", borderRadius:"50%" }}  />
                   <span> Saif Ullah</span>
                </div>
                <div className="pro">
                    <FaUserFriends color="blue" fontSize="1.8rem" style={{ paddingRight: "15px" }} />
                    <div>Friends</div>
                </div>
                <div className="pro">
                    <FaFontAwesomeFlag color="green" fontSize="1.8em" style={{ paddingRight: "15px" }} />
                    <div>Pages</div>
                </div>

                <div className="pro">
                    <FaFacebookMessenger color="green" fontSize="1.8rem" style={{ paddingRight: "15px" }} />
                    <div>Messenger</div>
                </div>

                <div className="pro">
                    <FaAngleDown color="green" fontSize="1.8rem" style={{ paddingRight: "15px" }} />
                    <div>See More</div>
                </div>
                <br /><br />

                <div className="profiles">
                    <img src={graphic} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                    Graphic Designing
                </div>

                <div className="profiles">
                    <img src={web} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                    Web Developement
                </div>

                <div className="profiles">
                    <img src={app} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                    App Developement
                </div>

                <div className="profiles">
                    <img src={mern} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                    MERN STACK
                </div>

                <div className="pross">
                    <FaAngleDown color="blue" fontSize="1.8rem" style={{ paddingRight: "10px" }} />
                    <div>See More</div>
                </div>
            </div>

            <div className="MainArea">
                <div className="addStory">
                    <div className="Story" style={{backgroundImage:`url(${story1})`, objectFit:'contain', backgroundPosition:'center',backgroundSize:"cover"}}>
                        <img src={profileImg} alt="IMG" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Saif Ullah
                    </div>
                    <div className="Story" style={{backgroundImage:`url(${story7})`, objectFit:'contain', backgroundPosition:'center',backgroundSize:"cover"}}>
                        <img src={story2} alt="IMG" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Flowers
                    </div>
                    <div className="Story" style={{backgroundImage:`url(${story6})`, objectFit:'contain', backgroundPosition:'center',backgroundSize:"cover"}}>
                        <img src={story3} alt="IMG" style={{ height: "60px", width: "60px", borderRadius: "50%" }}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Night
                    </div>

                    <div className="Story" style={{backgroundImage:`url(${story5})`, objectFit:'contain', backgroundPosition:'center',backgroundSize:"cover"}}>
                        <img src={story4} alt="IMG" style={{ height: "60px", width: "60px", borderRadius: "50%" }}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Picture
                    </div>
                </div>

                <div className="message">
                    <div className="text">
                        <div className="Post">
                            <img src={profileImg} alt="PIC" style={{ height:"50px", width:"50px", borderRadius:"50%" }} />
                            <input type="Mind" placeholder="What's on your mind, Saif?" />
                        </div>

                        <div className="Call">
                            <div className="ico">
                                <div className="icone">
                                    <MdVideoCall fontSize="2rem" color="red" />
                                    <div>Live Video</div>
                                </div>

                                <div className="icone">
                                    <AiFillFileImage fontSize="2rem" color="green" />
                                    <div>Photo/Video</div>
                                </div>

                                <div className="icone">
                                    <faGrin fontSize="2rem" color="orange" />
                                    <div>Felling/activity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Posted">
                    <div className="poster">

                        <div className="edit"><MdMoreHoriz fontSize="1.5rem" /></div>
                    </div>
                    <div className="postBody">
                        <img src={profileImg} alt="profile image"  style={{ height:"50px", width:"50px", borderRadius:"50%" }} />
                        <span>Saif Ullah
                        <div className="update"> Updated his cover image.</div>
                        </span>

                    </div>

                    <div className="caption">
                        Please Like, Comment and Subscribe to our YouTube Channel.
                    </div>
                    <div className="postImg">
                        <img src={saifImg} alt="image" style={{ height: "auto", width: "100%" }}  /> 
                    </div>
                    <br></br>


                    <div className="Comment">
                        <div className="Like">
                            <FaThumbsUp color="grey" />Like
                        </div>
                        <div className="Like">
                            <FaCommentAlt color="grey" />Comment
                        </div>
                        <div className="Like">
                            <FaShare color="grey" />Share
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>


            <div className="Lside">
                <div className="Contact">
                    <div className="Contacts">
                        Contacts
                    </div>
                    <div className="chaticon">
                        <div className="icon">
                            <MdVideoCall fontSize="1.8rem" />
                        </div>
                        <div className="icon">
                            <FaSearch fontSize="1.6rem" />
                        </div>
                        <div className="icon">
                            <MdMoreHoriz fontSize="1.6ren" />
                        </div>
                    </div>
                </div>
                <div className="concise">
                    <div className="Profilee">
                        <img src={profileImg} alt="logo" style={{ height: "35px", width:"35px", padding: "1rem" }} /> Saif Ullah
                    </div>
                    <div className="Profilee">
                        <img src={story5} alt="logo" style={{ height: "35px", width:"35px", padding: "1rem" }} /> Syed Alam
                    </div>
                    <div className="Profilee">
                        <img src={story3} alt="logo" style={{ height: "35px", width:"35px", padding: "1rem" }} /> Rahat Ali
                    </div>
                    <div className="Profilee">
                        <img src={story6} alt="logo" style={{ height: "35px", width:"35px", padding: "1rem" }} /> Anjali
                    </div>
                    <div className="Profilee">
                        <img src={story7} alt="logo" style={{ height: "35px", width:"35px", padding: "1rem" }} /> Kaushal

                    </div>
                </div>
            </div>
        </div>

    )

}

export default MainArea;