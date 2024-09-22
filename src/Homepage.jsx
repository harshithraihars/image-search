import React, { useEffect, useState } from 'react'
import Option from './Option'
import Img from './Img'
import Spinner from './Spinner'
const Homepage = () => {
    const [loading,setLaoding]=useState(true)
    const [data,setData]=useState([])
    const [input,setInput]=useState("")
    const options=["Nature","Birds","Cats","Shoes"]
    const handleSearch=()=>{   
        setLaoding(true) 
        if(input){
            const api=`https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=-bKMICp2x93G0tNfg4BmI7Lj8uyH9a-rCbmWPfgDe3Y`
            fetch(api).then((response)=>response.json()).then((data)=>{
                setData(data.results)
                setLaoding(false)
                setInput("")
            }).catch(()=>{
                console.log("something went wronmg")
            })

        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        handleSearch()
    }
    useEffect(()=>{
        const api="https://api.unsplash.com/search/photos?page=1&query=office&client_id=-bKMICp2x93G0tNfg4BmI7Lj8uyH9a-rCbmWPfgDe3Y"
        fetch(api).then((response)=>response.json()).then((data)=>{
            setLaoding(false)
            setData(data.results)
        }).catch(()=>{
            console.log("something went wronmg")
        })

    },[])

  return (
    <div>
        <div className='w-screen font-bold text-blue-700 flex items-center justify-center h-24'>
            <h1 className='text-4xl'>Image Search</h1>
        </div>
        <div className='flex items-center justify-center'>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder={input?input:"Search..."} onChange={(e)=>setInput(e.target.value)} className='border-solid border-2 border-gray-600 rounded-xl w-80 p-2'/>
            </form>
        </div>
        <div className='flex items-center justify-center gap-5 mt-10'>
            {options.map((option)=>{
                return (
                    <Option option={option} setInput={setInput} handleSearch={handleSearch}/>
                )
            })}
        </div>
        <div>
            {loading ? (
                <Spinner/>
            ):
            (
                <div className='flex flex-wrap gap-10 p-10 items-center justify-center'>
                    {data? (
                        data.map((data)=>{
                            return (
                                <Img link={data.urls.small}/>
                            )
                        })
                    ):""
                    }
                </div>
            )
            }
            
        </div>
    </div>
  )
}

export default Homepage