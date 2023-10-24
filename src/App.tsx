// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { useForm } from "react-hook-form"
import react , {useEffect} from "react"


function App() {
  // const [count, setCount] = useState(0)


  const submitData = (data: unknown , e:unknown) => {
      e.preventDefault()
      // console.log(data)
      const dataSended = data

      const newContact = {...dataSended , visible:true}
      console.log(newContact)

      
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/contacts/')
      .then(data => data.json())
      .then(d => console.log("data" , d))
      .catch(err => console.error(err))
  } , [])
  

  return (
    <div className='flex flex-col items-center justify-center h-screen overflow-y-hidden'>
      {/* App.tsx */}
      <Layout submitData={submitData} />
    </div>
  )
}

export default App
