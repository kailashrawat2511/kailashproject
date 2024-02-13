import React from 'react'
import Card from './Card'

function Drone() {
  return (
    <>
      <Card/>
       <div className='container my-4'>
        <h2 className='text-center'style={{fontWeight:'bold'}}>Our Drone Shots</h2>
           <div className='row mt-3'>
               <div className='col-sm-3'>
                   <video width="320" controls>
                        <source src="/images/video.mp4" type="video/mp4"/>
                   </video>
               </div>
               <div className='col-sm-3'>
               <video width="320"controls>
                        <source src="/images/video1.mp4" type="video/mp4"/>
                   </video>
               </div>
               <div className='col-sm-3'>
               <video width="320" controls>
                        <source src="/images/video2.mp4" type="video/mp4"/>
                   </video>
               </div>
               <div className='col-sm-3'>
               <video width="320" controls>
                        <source src="/images/video.mp4" type="video/mp4"/>
                   </video>
               </div>
           </div>
       </div>
    </>
  )
}

export default Drone