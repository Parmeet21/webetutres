import React from 'react'
import coral from './img-label/coral.jpeg'
import adobe from './img-label/adobe.png'
import blender from './img-label/blender.png'

export default function Grapics() {
  return (
    <div className='container'>
      <div className='row'>
       <div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={coral} className="mt-1 mx-5" alt="..." style={{width:"200px",height:"179px"}} />
 <div class="card-body">
<h5 className="card-title">Coraldraw Tutorial</h5>
<p className="card-text">This Coraldraw tutorial is from <br />`Real Tutorial` youtube channel.</p>
<a href="https://youtu.be/FJYgNUYUvZc"  target={"_blank"} className="btn btn-primary" >Click here for Coraldraw course</a>
</div>
</div>
</div>
       <div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={adobe} className="mt-1 mx-5" alt="..." style={{width:"200px",height:"179px"}} />
 <div class="card-body">
<h5 className="card-title">Adobe-xd Tutorial</h5>
<p className="card-text">This Adobe-xd  tutorial is from <br />`Ws Cube Tutorial` youtube channel.</p>
<a href="https://youtu.be/VQAwe1zT8D8"  target={"_blank"} className="btn btn-primary" >Click here for Adobe-xd course</a>
</div>
</div>
</div>
       <div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={blender} className="mt-1 mx-5" alt="..." style={{width:"200px",height:"179px"}} />
 <div class="card-body">
<h5 className="card-title">Blender Tutorial</h5>
<p className="card-text">This Blender tutorial is from <br />`Nafay 3D` youtube channel.</p>
<a href="https://youtu.be/fUA8tfC-0-E"  target={"_blank"} className="btn btn-primary" >Click here for Blender course</a>
</div>
</div>
</div>
</div>
    </div>
  )
}
