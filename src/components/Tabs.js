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
        <div className={toggleState === 1 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(1)}>  Content</div>
        <div className={toggleState === 2 ? 'tabs openTab' : 'tabs'} onClick={() => toggleTab(2)}> Take Notes</div>
      </div>

      <div className='content-tabs'>
        <div className={toggleState === 1 ? 'content openContent' : 'content'}>
          <h2>{props.lesson.title}</h2>
          <h2>{props.lesson.teacher}</h2>
          <h2>{props.lesson.guidingQuestions}</h2>
          <h2>{props.lesson.backgroundKnowledge}</h2>
          <h2>{props.lesson.activities}</h2>
          <h2>{props.lesson.lessonPlan}</h2>
          <h2>{props.lesson.resources}</h2>
        </div>


        <div className={toggleState === 2 ? 'content openContent' : 'content'}>
          <h2>NOTES</h2>
          <Notes/>
        </div>

      </div>
    </div>
  )
}

export default Tabs;