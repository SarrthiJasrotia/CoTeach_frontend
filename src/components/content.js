import ReactPlayer from 'react-player';
import React from 'react';
import { Link } from "react-router-dom";


function Content(props) {
    return (
        <div >
        <Link to={`/content/${props.id}`}>
            
                <ReactPlayer  width='100%'  light={true} url={props.videoURL} />
            </Link>
</div>
    )
}

export default Content;