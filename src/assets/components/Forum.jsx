import { useState } from 'react'

import './App.css'

function Forum() {
  const [date, setDate] = useState({
    author :"",
    title: "",
    body:"",
    public :"false"
  })
  function handleform(e){
   setDate({
    ...date,
   [e.target.name]: e.target.value
   });
  }

  return (
    <div className='container'>
     <div className='row'>
        <div className='col'>
            <form >
             <div className='row'>
                <div className='col'>
                    <input
                    name="author"
                    type="text"
                    placeholder="author"
                    value ={date.author} 
                    onChange={handleform}/>
                </div>
             </div>
            </form>
        </div>
     </div>
    </div>
  )
}

export default Forum