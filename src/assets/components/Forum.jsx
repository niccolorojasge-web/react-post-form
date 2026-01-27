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

    </div>
  )
}

export default Forum