import React, { useState } from 'react'
import bg from "/glassesImage/background.jpg"
import Model from "./Model"
import Item from "./Item"
import data from '/public/dataGlasses.json'
const Body = () => {
    const [glassID, setGlassID] = useState(1);

    const renderGlass = (id) =>{
        console.log('id', id);
        
        setGlassID(id);        
    }
    return <div className='relative '>
        <h1 className='py-10 text-4xl bg-black bg-opacity-30 text-center font-semibold'>Thử kính</h1>
        <Model glassID={glassID} />
        <div className='grid bg-white items-center border grid-cols-4 w-100'>
        {
            data.map((glass, index)=>{
                return <Item id={glass.id} renderGlass={renderGlass} src={`/glassesImage/g${glass.id}.jpg`} key={glass.id}/>         
            })
        }
        </div>
       
        <div className='mask absolute top-0 left-0 h-screen w-screen bg-cover opacity-70  bg-no-repeat -z-10' style={{ backgroundImage: `url(${bg})` }}></div>
    </div>
}

export default Body