import React from 'react'
import html from './img-label/html.png'
import css from './img-label/css.png'
import js from './img-label/javascript.png'
import bootstrap from './img-label/bootstrap.png'
import angular from './img-label/angular.png'
import react from './img-label/reactjs.png'
export default function Frontend() {
  return (
    <div className='container'>
    
<div className='row my-3'>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={html} className="mt-1 mx-5" alt="..." style={{width:"200px"}} />
 <div class="card-body" >
<h5 className="card-title">Html Tutorial</h5>
<p className="card-text">This html tutorial is from <br />`Apna College` youtube channel.</p>
<a href="https://youtu.be/HcOc7P5BMi4" className="btn btn-primary" target={'_blank'}>Click here for HTML course</a>
</div>
</div>
</div>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={css} className="mt-1 mx-5" style={{width:"200px"}} alt="..." />
<div className="card-body">
 <h5 className="card-title">CSS Tutorial</h5>
<p className="card-text">This css tutorial is from `CodeWithHarry` youtube channel.</p>
<a href="https://youtu.be/Edsxf_NBFrw"  target={"_blank"}  class="btn btn-primary">Click here for CSS course</a>
</div>
 </div>
</div>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
 <img src={js} className="mt-1 mx-5 " alt="..." style={{width:"200px"}} />
 <div className="card-body">
 <h5 className="card-title">Javascript Tutorial</h5>
  <p className="card-text">This javascript tutorial is from `CodeWithHarry` youtube channel.</p>
<a href="https://youtu.be/hKB-YGF14SY" target={"_blank"}  class="btn btn-primary">Click here for Javascript tutorial</a>
</div>
</div>
</div>
</div>
<div className='row my-3'>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={bootstrap} className="mt-1 mx-5" alt="..." style={{width:"200px",height:"179px"}} />
 <div class="card-body">
<h5 className="card-title">Bootstrap Tutorial</h5>
<p className="card-text">This bootstrap tutorial is from <br />`Tech Gun` youtube channel.</p>
<a href="https://youtu.be/QE5oQh63gGE"  target={"_blank"} className="btn btn-primary" >Click here for Bootstrap course</a>
</div>
</div>
</div>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={react} className="mt-1 mx-5" style={{width:"200px"}} alt="..." />
<div className="card-body">
 <h5 className="card-title">React JS Tutorial</h5>
<p className="card-text">This react js tutorial is from `Thappa Technical` youtube channel.</p>
<a href="https://youtu.be/EHTWMpD6S_0"  target={"_blank"}  class="btn btn-primary">Click here for React JS course</a>
</div>
 </div>
</div>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
 <img src={angular} className="mt-1 mx-5 " alt="..." style={{width:"200px",height:"179px"}} />
 <div className="card-body">
 <h5 className="card-title">Angular Tutorial</h5>
  <p className="card-text">This angular tutorial is from `Code Step By Step` youtube channel.</p>
<a href="https://youtu.be/pCewaWYNnu4" target={"_blank"}  class="btn btn-primary">Click here for Angular tutorial</a>
</div>
</div>
</div>
<div>
 
</div>
</div>

    </div>
  )
}
