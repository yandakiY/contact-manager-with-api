// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { useForm } from "react-hook-form"
import react , {useEffect , useState} from "react"
import axios  from 'axios'
// import myApi from "./api"



function App() {
  const [contacts, setContacts] = useState([])


  const submitData = (data: unknown , e:unknown) => {
      e.preventDefault()
      // console.log(data)
      const dataSended = data

      const newContact = {...dataSended , visible:true}
      console.log(newContact)

      setContacts([...contacts , newContact])
      axios.post("http://127.0.0.1:8000/api/save_contact/" , newContact);
      
  }

  const updateSubmitData = (data , e) => {

    e.preventDefault()
    // change set Contacts
    setContacts(contacts.map(contact => contact.id == data.id ? data : contact))

    axios.put(`http://127.0.0.1:8000/api/contact/update_contact/${data.id}` , data)
    console.log("Update",data)

  }

  const deleteContact = (data: string) => {

    console.log("Delete" ,data)
    // e.preventDefault()
    // filter contact with the same id
    setContacts(contacts.filter(contact => contact.id != data))

    axios.delete(`http://127.0.0.1:8000/api/contact/delete/${data}`)
      .then(() => console.log("Delete ok"))
      .catch(err => console.error(err))

  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/contacts/')
      .then(data => data.json())
      .then(d => 
        {
          console.log("data" , d)
          setContacts(d)
        }
      )
      .catch(err => console.error(err))
  } , [])
  

  return (
    <div className='flex flex-col items-center justify-center h-screen overflow-y-hidden'>
      {/* App.tsx */}
      <Layout contacts={contacts} submitData={submitData} updateData={updateSubmitData} deleteContact={deleteContact} />
    </div>
  )
}

export default App
