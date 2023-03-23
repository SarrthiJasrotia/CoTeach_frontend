import React from 'react'
import ReactPlayer from 'react-player';
import BannerPic from "../classroom.jpg";
import Icon1 from '../brain.png'
import Icon2 from '../female.png'
import Icon3 from '../cap.png'
import Icon4 from '../share.png'


export const Banner = () => {
  return (
    <div className='banner'>
        <div className='bannerL'>

          <div className='welcomeBoard'>
             <p>WELCOME</p>
            <p>TO</p>
            <p>Co-Teach</p>
          </div>

          
        
          
           
            </div>
            
        <div className='bannerR'>
        {/* <div className='bannerPic'> <img src={BannerPic} alt="classroom img"/></div> */}
           <div className='icons'>
              <img src={Icon1}/>
              <p className='iconText'>Develop your skills as an educator. </p>
              <img src={Icon2}/>
              <p className='iconText'>All the content you need in one place. </p>
              </div>
              
              <div className='icons'>
              <img src={Icon3}/>
              <p className='iconText'>Better resources = better results for your students.</p>
              <img src={Icon4}/>
              <p className='iconText'>Share your materials with others.</p>
           </div>
           
       
          
          
        </div>
    </div>
  )
}

export default Banner;