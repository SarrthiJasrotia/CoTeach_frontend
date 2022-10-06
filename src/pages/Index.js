import { Link } from "react-router-dom";
import Content from "../components/content";
import Banner from "../components/Banner";
import Wood from "../components/Wood";
import NewBtn from "../components/NewBtn";

function Index(props) {

    // loaded function
    const loaded = () => {
        return props.content.map((lesson) => (
            <div key={lesson._id} className="lesson1">
                <Link to={`/content/${lesson._id}`} style={{ textDecoration: "none" }}><div className="thumbTitle"><h1>{lesson.title}</h1>
                    <p>Category: {lesson.category}</p></div>
                    <div className="thumbnail">
                        <Content videoURL={lesson.videoURL} id={lesson._id} /></div></Link>
            </div >
        ));
    };

    // If a user isn't logged in, do not show the New Button to create content
    const newBut = () => {
        return <NewBtn />
    }

    // loading function...no props.content yet
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    console.log('Index.js', props)

    return (
        <>
            <Banner />
            <Wood />
            <div className="indexContainer">
                {props.content ? loaded() : loading()}
                {props.user ? newBut() : ''}

            </div></>
    );
}

export default Index;