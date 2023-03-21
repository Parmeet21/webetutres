import React from 'react'
import mongo from './img-label/mongo db.png'
import nodejs from './img-label/node js.png'
import python from './img-label/python.png'
import php from './img-label/php.png'
export default function Background() {
  return (
      <div className="container">
<div className='row my-3'>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={mongo} className="mt-1 mx-5  my-3" alt="..." style={{width:"200px",height:"179px"}} />
 <div class="card-body">
<h5 className="card-title">Mongo DB Tutorial</h5>
<p className="card-text">This mongo db tutorial is from <br />`Tech Gun` youtube channel.</p>
<a href="https://youtu.be/oSIv-E60NiU"  target={"_blank"}  rel="noreferrer" className="btn btn-primary" >Click here for Mongo DB course</a>
</div>
</div>
</div>
<div className='col-md-4 my-3'>
<div className="card" style={{ width: "18rem" }}>
<img src={nodejs} className="mt-1 mx-5  my-3" style={{width:"200px",height:"179px"}} alt="..." />
<div className="card-body">
 <h5 className="card-title">Node JS Tutorial</h5>
<p className="card-text">This node js tutorial is from `Code Step By Step` youtube channel.</p>
<a href="https://youtu.be/VrQgmNY96wo"  target={"_blank"}  class="btn btn-primary">Click here for Node JS course</a>
</div>
 </div>
</div>
<div className='col-md-4  my-3'>
<div className="card" style={{ width: "18rem" }}>
 <img src={python} className="mt-1 mx-5  my-3" alt="..." style={{width:"200px",height:"179px"}} />
 <div className="card-body">
 <h5 className="card-title">Python Tutorial</h5>
  <p className="card-text">This python tutorial is from `Apna College` youtube channel.</p>
<a href="https://youtu.be/vLqTf2b6GZw" target={"_blank"} class="btn btn-primary">Click here for Python tutorial</a>
</div>
</div>
</div>
</div>
<div className='row my-3'>
<div className='col-md-4'>
<div className="card" style={{ width: "18rem" }}>
<img src={php} className="mt-1 mx-5 my-3" alt="..." style={{width:"200px",height:"179px"}} />
 <div class="card-body">
<h5 className="card-title">PHP Tutorial</h5>
<p className="card-text">This php tutorial is from <br />`Thappa Technical` youtube channel.</p>
<a href="https://youtu.be/3024Kc6SDJ0"  target={"_blank"} className="btn btn-primary" >Click here for PHP course</a>
</div>
</div>
</div>
    </div>
    </div>
  )
}
