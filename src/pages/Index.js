
import { Link } from "react-router-dom";
import { useState } from "react";


function Index(props) {

    // state to hold our formData
    const [newForm, setNewForm] = useState({
        title: "",
        teacher: "",
        videoURL: "",
        guidingQuestions: "",
        backgroundKnowledge: "",
        activities: "",
        lessonPlan: "",
        resources: "",
        category: "",

    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createContent(newForm);
        setNewForm({
            title: "",
            teacher: "",
            videoURL: "",
            guidingQuestions: "",
            backgroundKnowledge: "",
            activities: "",
            lessonPlan: "",
            resources: "",
            category: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.content.map((lesson) => (
            <div key={lesson._id} className="lesson">
                <Link to={`/content/${lesson._id}`}><h1>{lesson.title}</h1></Link>
                <h3>{lesson.category}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section>
            {props.content ? loaded() : loading()}
        </section>
    );
}

export default Index;