import { useState } from "react";


function New(props) {

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

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.teacher}
                    name="teacher"
                    placeholder="teacher"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.videoURL}
                    name="videoURL"
                    placeholder="videoURL"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.guidingQuestions}
                    name="guidingQuestions"
                    placeholder="guidingQuestions"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.backgroundKnowledge}
                    name="backgroundKnowledge"
                    placeholder="backgroundKnowledge"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.activities}
                    name="activities"
                    placeholder="activities"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.lessonPlan}
                    name="lessonPlan"
                    placeholder="lessonPlan"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.resources}
                    name="resources"
                    placeholder="resources"
                    onChange={handleChange} />
                <input
                    type="text"
                    value={newForm.category}
                    name="category"
                    placeholder="category"
                    onChange={handleChange} />

                <input type="submit" value="Create Lesson" />
            </form>

        </section>
    );
}

export default New;