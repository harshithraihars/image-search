import React from 'react'

const Img = ({link}) => {
  return (
    <div>
        <img src={link} className='w-64 h-64 rounded-xl'/>
    </div>
  )
}

export default Img