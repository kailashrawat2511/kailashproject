import React from 'react'
import Card from './Card'

function Topshots() {
  return (
    <>
    <Card/>
       <div className='container my-3'>
           <h2 className='text-center'style={{fontWeight:'bold'}}>Our Top Shots</h2>
           <div className='row mt-3'>
               <div className='col-sm-3'>
                <img src='/images/topphoto1.jpg' className='topimg'/>
               </div>
               <div className='col-sm-3'>
               <img src='/images/topphoto2.jpg' className='topimg'/>
               </div>
               <div className='col-sm-3'>
               <img src='/images/topphoto3.jpeg' className='topimg'/>
               </div>
               <div className='col-sm-3'>
               <img src='/images/topphoto1.jpg' className='topimg'/>
               </div>
           </div>
       </div>
    </>
  )
}

export default Topshots