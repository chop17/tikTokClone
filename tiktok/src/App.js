import "./App.css";
import Videos from "./Video";
import axios from "./axios";
import {useEffect, useState} from "react";



function App() {

    const [videos,setVideos]=useState([]);
        useEffect(()=>{
            async function fetchPosts(){
                const response = await axios.get("/v2/posts");
                setVideos(response.data);
                return response;
            }
            fetchPosts();
        },[]);
        console.log(videos);
    return (
        <div className="app">
            <div className="app_videos">
                {videos.map(
                    ({url,channel, desc, song, likes, msgs, share})=>(
                <Videos
                    url={url}
                    song={song}
                    desc={desc}
                    channel={channel}
                    share={share}
                    msgs={msgs}
                    likes={likes}/>
                    )
                )}
            </div>
            {/* app container videos */}
            {/* <Video/> */}
            {/* <Video/> */}
            {/* <Video/> */}
            {/* <Video/> */}
            {/* <Video/> */}
        </div>
    );
}

export default App;
