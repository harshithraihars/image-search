import React from 'react'
const Option = ({option,setInput,handleSearch}) => {
    const handleClick=(option)=>{
        setInput(option)
        handleSearch()
    }
  return (
    <div>
        <button className='border-none bg-blue-400 text-white rounded-md p-2 w-20 hover:bg-blue-600' onClick={()=>handleClick(option)}>{option}</button>
    </div>
  )
}

export default Option