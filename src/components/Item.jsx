import React from 'react'

const Item = (props) => {
  return <>
    <img className='px-5 py-3' src={props.src} onClick={()=>{
            console.log('props-item', props);
            
            props.renderGlass(props.id);
          }} alt="" />
  </> 
}

export default Item