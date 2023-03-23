import { useState,useEffect,Link } from 'react'
import Notes from './Notes';


function Tabs(props) {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }


  ///////////////////////////////fetch notes 
  const [newNote, setNewNote] = useState(
   null
  )

  const notesURL = "https://coteach-backend.herokuapp.com/notes/"

  // This function is used to get the data from the database. It will wait until it is completed and the set the state of the content with the returned data
  const getNotes = async () => {
    const response = await fetch(notesURL);
    const data = await response.json();
    setNewNote(data);
    
  }
console.log( 'NewNote',newNote)
  //Initial render
  useEffect(() => {
    getNotes();
}, []);

// loaded function
const loaded = () => {
  return newNote.map((note,index) => (
    < div style={{textAlign:"left",fontSize:'20px',marginLeft:'5%'} }
    >
    <div key={index}></div>
     <p><h3>Note #{index+1}</h3> {note.notes}</p></div>
  ));
};
   // loading function...no props.content yet
   const loading = () => {
    return <h1>Loading...</h1>;
};
  // If user is logged in, allow the tabs to be clicked
  const notesTabsEnabled = () => {
    return (
      <>
        <div className={toggleState === 1 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(1)}>  <h1>Content</h1></div>
        <div className={toggleState === 2 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(2)}> <h1>Take Notes</h1></div>
        <div className={toggleState === 3 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(3)}> <h1>Show Notes</h1></div></>
    )
  }

  // If no user logged in, disable clicking on the tabs
  const notesTabsDisabled = () => {
    return (
      <>
        <div className={toggleState === 1 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(1)}>  <h1>Content</h1></div>
        <div className='tabDisable'><h1>Login to access Notes</h1></div>
      </>

    )
  }

  ///////////////////////////////////////////////////////////////
  return (
    <div className="container">
      <div className='bloc-tabs'>

        {(props.user) ? notesTabsEnabled() : notesTabsDisabled()}
      </div>

      <div className='content-tabs'>
        <div className={toggleState === 1 ? 'content openContent' : 'content'}>
          <div className='lessonText'>
            <h2>{props.lesson.title}</h2>
            <p>Creator: {props.lesson.teacher}</p>
            <p>Guiding Questions: {props.lesson.guidingQuestions}</p>
            <p>Background Knowledge: {props.lesson.backgroundKnowledge}</p>
            <p>Activities: {props.lesson.activities}</p>
            <p>Lesson Plan: {props.lesson.lessonPlan}</p>
            <a href={props.lesson.resources} style={{color:'white'}} target={'_blank'}>Resource Links: {props.lesson.resources}</a>
          </div>
        </div>


        <div className={toggleState === 2 ? 'content openContent' : 'content'}>
          <h2>NOTES</h2>
          <Notes />
        </div>

        <div className={toggleState === 3 ? 'content openContent' : 'content'}>
          <h2>Notes Taken</h2>
          {newNote ? loaded() : loading()}
        </div>
      </div>
    </div >
  )
}

export default Tabs;