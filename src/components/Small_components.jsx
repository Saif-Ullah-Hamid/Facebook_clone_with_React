

export const CommentBody = (props) => {
        return(
            <div style={{display:'flex',marginBottom:"15px"}}>
            <img src={props.image} alt="profile Image" style={{width:'40px',height:"40px",borderRadius:"50%", objectFit:"cover"}}/>
            <span>
            <div style={{marginLeft:"8px",backgroundColor:'rgb(200, 200, 200)',padding:"10px",borderRadius:'10px'}}> 
                <div style={{marginBottom:"4px",fontWeight:'bold'}}>profile name goes here</div>
                {props.body}
            </div>
            <div className="btnBelowCommentedTextContainer">
                <span className="btnBelowCommentedText">timestemps</span>
                <span className="btnBelowCommentedText">Like</span>
                <span className="btnBelowCommentedText">Replay</span>
            </div>
            </span>

            </div>
        )
}