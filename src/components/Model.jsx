import React from 'react'
import model from "/glassesImage/model.jpg"
const Model = (props) => {
  console.log('props', props.glassID);

  return <div className='py-10 flex items-center justify-center'>
    <div className="wrapper relative"><img src={model} className='w-48' alt="" />
      <img className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-28' src={`/glassesImage/v${props.glassID}.png`} alt="" />
    </div>
  </div>
}

export default Model