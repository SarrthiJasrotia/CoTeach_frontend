import { useState } from 'react'
import Notes from './Notes';

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className="container">
      <div className='bloc-tabs'>
        <div className={toggleState === 1 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(1)}>  <h1>Content</h1></div>
        <div className={toggleState === 2 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(2)}> <h1>Take Notes</h1></div>
        <div className={toggleState === 3 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(3)}> <h1>Show Notes</h1></div>
      </div>

      <div className='content-tabs'>
        <div className={toggleState === 1 ? 'content openContent' : 'content'}>
          <div className='lessonText'>
          <h2>{props.lesson.title}</h2>
          <p>{props.lesson.teacher}</p>
          <p>{props.lesson.guidingQuestions}</p>
          <p>{props.lesson.backgroundKnowledge}</p>
          <p>{props.lesson.activities}</p>
          <p>{props.lesson.lessonPlan}</p>
          <p>{props.lesson.resources}</p>
          </div>
        </div>


        <div className={toggleState === 2 ? 'content openContent' : 'content'}>
          <h2>NOTES</h2>
          <Notes/>
        </div>

        <div className={toggleState === 3 ? 'content openContent' : 'content'}>
          <h2>Notes Taken</h2>
          <h1>notes go here</h1>
        </div>
      </div>
    </div>
  )
}

export default Tabs;