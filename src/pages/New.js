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
        <section className="new-page-body">
            <div className="new-form-container">
                <div className="new-form-sidebar"></div>
                
                <div className="lesson-creation">
                <h1>Create a New Lesson</h1>
                <h4>Make an impact on another teacher.</h4>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Lesson Details</legend>
                <label for="title">
                    Lesson Title:
                <input
                    id="title"
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="Name of your lesson."
                    onChange={handleChange} />
                    </label><br/>
                    <label for="teacher">
                        Teacher Name:
                <input
                    id="teacher"
                    type="text"
                    value={newForm.teacher}
                    name="teacher"
                    placeholder="Your name."
                    onChange={handleChange} />
                    </label><br/>
                    <label for="videoURL">
                        Video Link: 
                <input
                    id="videoURL"
                    type="text"
                    value={newForm.videoURL}
                    name="videoURL"
                    placeholder="Link to your video lesson here."
                    onChange={handleChange} />
                    </label><br/>
                    <label for="category">
                        Category:
                <input
                    id="category"
                    type="text"
                    value={newForm.category}
                    name="category"
                    placeholder="Category name."
                    onChange={handleChange} />
                    </label><br/>

                    </fieldset>
                    <fieldset>
                        <legend>Lesson Content:</legend>
                    <label for="guidingQuestions">
                        Guiding Questions:
                <input
                    id="guidingQuestions"
                    type="text"
                    value={newForm.guidingQuestions}
                    name="guidingQuestions"
                    placeholder="What are some questions teachers should be asking the students?"
                    onChange={handleChange} />
                    </label><br/>
                    <label for="backgroundKnowledge">Background Knowledge:<br/>
                <textarea
                    className="newtextarea"
                    id="backgroundKnowledge"
                    type="text"
                    value={newForm.backgroundKnowledge}
                    name="backgroundKnowledge"
                    placeholder="Describe some concepts that the instructor would need to know before teaching this material."
                    onChange={handleChange} />
                    </label><br/>
                    <label for="activities">
                        Activities:
                <input
                    id="activities"
                    type="text"
                    value={newForm.activities}
                    name="activities"
                    placeholder="Place any activities you would use here."
                    onChange={handleChange} />
                    </label><br/>
                    <label for="lessonPlan">
                        Lesson Plan:<br/>
                <textarea
                className="newtextarea"
                    id="lessonPlan"
                    type="text"
                    value={newForm.lessonPlan}
                    name="lessonPlan"
                    placeholder="Add a lesson plan. It is helpful for others to understand how you structured this lesson."
                    onChange={handleChange} />
                    </label><br/>
                    <label for="resources">
                        Resources:
                <input
                    id="resources"
                    type="text"
                    value={newForm.resources}
                    name="resources"
                    placeholder="Add any links to resources here."
                    onChange={handleChange} />
                    </label><br/>
                    </fieldset>
                    
                <input id="create-btn" type="submit" value="Create Lesson" />
            </form>
            </div>
            </div>

        </section>
    );
}

export default New;