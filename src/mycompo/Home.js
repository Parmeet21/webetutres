import React from 'react'
import fullstack from './img-label/fullstack.png'
import Frontend from './img-label/frontend.png'
import Backend from './img-label/backend.png'
import Ghrapic from './img-label/graphic.png'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
<div className='container home'>
<div className='row '> 
<div  className='col-md-8'>  
  <img  src={fullstack} alt="" className='img-fluid animate__animated animate__swing' />
</div>
<div className='col-md-4 text-light my-4'> 
<h1>
    Select your course below
    <h1 className='my-3 animate__animated animate__slideInDown fullstackanimation'><span class="material-symbols-outlined">
arrow_downward
</span></h1>
   </h1>
</div>
</div>
<div className='row'>
    <div className='col-md-6 my-5'>
        <Link to="/frontend"><img className='img-fluid ' id='home2img' src={Frontend} style={{width:"430px",height:"315px"}} alt="" srcset="" /></Link>
        <h5 className='text-white text-decoration-none  my-5'>Click for Frontend Tutorials   <i className="fa-solid fa-hand-point-up mx-1 animate__animated animate__slideInDown fullstackanimation2"></i></h5>
        
    </div>
    <div className='col-md-6 my-5'>
    <Link to="/backend"><img className='img-fluid ' src={Backend} id='home2img' style={{width:"430px",height:"315px"}}  alt="" srcset="" /></Link><h5 className='text-white text-decoration-none my-5'>Click for Backend Tutorials   <i className="fa-solid fa-hand-point-up mx-1 animate__animated animate__slideInDown fullstackanimation2"></i></h5>

    </div>
</div>
<div className='row'>
<div className=' d-flex
 justify-content-center my-5'>
 
     <Link to="/graphics" className='text-decoration-none'>
       <img  src={Ghrapic} className='img-fluid ' id='home2img' style={{width:"430px",height:"315px"}}  alt="" srcset="" />
        <h5 className='  text-white  my-5'>Click for Graphic Tutorials
        <i className="fa-solid fa-hand-point-up mx-1 animate__animated animate__slideInDown fullstackanimation2"></i></h5></Link>

    </div>
</div>
</div>

    )
}
