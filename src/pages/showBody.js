import VideoPlayer from "../components/VideoPlayer";
import Tabs from "../components/Tabs";
import SuggestContent from "../components/SuggestContent";
import Popup from 'reactjs-popup'

function ShowBody(props) {
    console.log('showBody', props)
    const id = props.match.params.id;
    const content = props.content;
    const lesson = content.find(l => l._id === id);
    const userName = () => {
        if (!props.user.displayName) return ("");
        return props.user.displayName;
    }


    const removeContent = () => {
        props.deleteContent(lesson._id);
        props.history.push("/");
    }

    const delBut = () => {
        return (<Popup trigger={<button>DELETE</button>} position="top center" >
            <div className="deletePop">
                <span>Do you want to the delete this lesson?
                </span>
                <button id="delete" onClick={removeContent}>Delete Content</button>
            </div>
        </Popup>)
    }

    // { props.user.displayName === "Neil" ? delBut() : '' }
    return (
        <div className="ShowContainer">
            <div className="ShowVideo">
                <div className="ShowVideoPlayer"><VideoPlayer url={lesson.videoURL} /></div>
                <div className="SuggestedContent"><SuggestContent content={content} /></div>
            </div>
            <div className="ShowContent"><Tabs lesson={lesson} user={props.user} /></div>

        </div>
    )
}

export default ShowBody;



