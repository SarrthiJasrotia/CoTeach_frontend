import VideoPlayer from "../components/VideoPlayer";
import Tabs from "../components/Tabs";
import SuggestContent from "../components/SuggestContent";
import Popup from 'reactjs-popup'

function ShowBody(props) {
    const id = props.match.params.id;
    const content = props.content;
    const lesson = content.find(l => l._id === id);

    const removeContent = () => {
        props.deleteContent(lesson._id);
        props.history.push("/");
    }

    return (
        <div className="ShowContainer">
            <div className="ShowVideo">
                <div className="ShowVideoPlayer"><VideoPlayer url={lesson.videoURL} /></div>
                <div className="SuggestedContent"><SuggestContent content={content} /></div>


                <div>
                    {(() => {
                        if (props.user) {
                            if (props.user.email==='matthew.ellis.porter@gmail.com' ||'neilpsaunders@gmail.com'||'sarrthijasrotia05@gmail.com'){
                                return(
                                    <Popup trigger={<button>DELETE</button>} position="top center" >
                                    <div className="deletePop">
                                        <span>Do you want to the delete this lesson?
                                        </span>
                                        <button id="delete" onClick={removeContent}>Delete Content</button>
                                    </div>
                                </Popup>
                                )
                            }

                        } else {
                            return (
                                <div></div>
                            )
                        }
                    })()}
                </div>
                


            </div>
            <div className="ShowContent"><Tabs lesson={lesson} user={props.user} /></div>

        </div >
    )
}

export default ShowBody;



