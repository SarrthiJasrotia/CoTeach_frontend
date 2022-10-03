import VideoPlayer from "../components/VideoPlayer";
import Tabs from "../components/Tabs";
function ShowBody(props) {
    return (
        <div className="ShowContainer">
            <div className="ShowVideo">
                <div className="ShowVideoPlayer"><VideoPlayer /></div>
                <div className="SuggestedContent">SuggestedContent</div>

            </div>

            <div className="ShowContent"><Tabs /></div>



        </div>
    )
}

export default ShowBody;