import { Link } from "react-router-dom";
import Content from "../components/content";
import Banner from "../components/Banner";

function Index(props) {

    // loaded function
    const loaded = () => {
        return props.content.map((lesson) => (
            <div key={lesson._id} className="lesson1">
                <Link to={`/content/${lesson._id}`} style={{textDecoration:"none"}}><div className="thumbTitle"><h1>{lesson.title}</h1>
                <h3>{lesson.category}</h3></div>
                <div className="thumbnail">
                <Content videoURL={lesson.videoURL} id={lesson._id} /></div></Link>
            </div >
        ));
    };

    // loading function...no props.content yet
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <>
        <Banner/>
        <div className="indexContainer">
            {props.content ? loaded() : loading()}
        </div></>
    );
}

export default Index;