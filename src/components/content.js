import ReactPlayer from 'react-player';
import React from 'react';
import { Link } from "react-router-dom";


function Content(props) {
    return (
        <Link to={`/content/${props.id}`}>
            <div >
                <ReactPlayer light={true} url={props.videoURL} />
            </div></Link>

    )
}

export default Content;