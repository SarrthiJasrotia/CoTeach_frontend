import React from 'react'
import Content from './content';
import { Link } from "react-router-dom";

function SuggestContent(props) {

  function rndVideoNum() {
    return Math.floor(Math.random() * props.content.length)
  }

  const rndNum = rndVideoNum();
  const rndNum2 = rndVideoNum();

  return (
    <>
   


      <div key={props.content[rndNum]._id} className="lesson1">
        <Link to={`/content/${props.content[rndNum]._id}`}style={{textDecoration:"none"}}>
        <div className="thumbTitle"><h1>{props.content[rndNum].title}</h1>
        <h3>{props.content[rndNum].category}</h3> </div>
        <div className="thumbnail">
        <Content videoURL={props.content[rndNum].videoURL} id={props.content[rndNum]._id} /></div></Link>
      </div >


      <div key={props.content[rndNum2]._id} className="lesson1">
        <Link to={`/content/${props.content[rndNum2]._id}`}style={{textDecoration:"none"}}>
        <div className="thumbTitle"><h1>{props.content[rndNum2].title}</h1>
        <h3>{props.content[rndNum2].category}</h3> </div>
        <div className="thumbnail">
        <Content videoURL={props.content[rndNum2].videoURL} id={props.content[rndNum2]._id} /></div></Link>
      </div >
    </>
  );
}

export default SuggestContent;