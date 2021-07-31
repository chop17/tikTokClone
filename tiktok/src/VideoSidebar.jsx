import React, {useState} from 'react';
import "./VideoSidebar.css"
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";


function VideoSidebar({likes,msgs,share}) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                <IconButton className="videoSidebar_iconbutton">
                    {liked ? (<FavoriteIcon fontSize="large"
                                            onClick={(e) => setLiked(false)}/>) :
                        (<FavoriteBorderIcon fontSize="large"
                                             onClick={(e) => setLiked(true)}/>)}
                </IconButton>

                <p>{(liked?likes+1:likes)}</p>
            </div>
            <div className="videoSidebar_button">
                <IconButton className="videoSidebar_iconbutton">
                    <MessageIcon fontSize="large"/>
                </IconButton>

                <p>{msgs}</p>
            </div>
            <div className="videoSidebar_button">
                <IconButton className="videoSidebar_iconbutton">

                    <ShareIcon fontSize="large"/>
                </IconButton>

                <p>{share}</p>
            </div>
        </div>
    );
}

export default VideoSidebar;