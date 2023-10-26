// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import {useEffect , useState} from "react"
import axios  from 'axios'
import React from 'react'
import ContactFalse from './components/ContactFalse'
// import myApi from "./api"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




function App() {
  const [contacts, setContacts] = useState([])
  const [contactsFalse , setContactsFalse] = useState([])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



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

    axios.put(`http://127.0.0.1:8000/api/contact/not_visible/${data}` , {"visible":"false"})
      .then(() => console.log("Delete ok"))
      .catch(err => console.error(err))

      setTimeout(() => {
        window.location.reload()
      }, 1000);
    
  }

  const restoreContact = (data: string) => {

    console.log("Restore" ,data)
    // e.preventDefault()
    // filter contactFalse with the same id
    setContactsFalse(contactsFalse.filter(contact => contact.id != data))

    axios.put(`http://127.0.0.1:8000/api/contact/not_visible/${data}` , {"visible":"true"})
      .then(() => console.log("restoration ok"))
      .catch(err => console.error(err))

    // // Update contact restore
    // axios.get("http://127.0.0.1:8000/api/contacts/")
    //   .then(data => data.data)
    //   .then(d => setContacts(d))

    handleClose()

    window.location.reload()
  }

  const deleteDefContact = (data: string) => {

    console.log("Delete" ,data)
    // e.preventDefault()
    // filter contact with the same id
    setContacts(contacts.filter(contact => contact.id != data))

    axios.delete(`http://127.0.0.1:8000/api/contact/delete/${data}`)
      .then(() => console.log("Delete def ok"))
      .catch(err => console.error(err))

    handleClose()
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/contacts/')
      .then(data => data.json())
      .then(d => 
        {
          // console.log("data" , d)
          setContacts(d)
        }
      )
      .catch(err => console.error(err))

  } , [])
  

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen overflow-y-hidden'>
        {/* App.tsx */}
        <Layout contacts={contacts} submitData={submitData} updateData={updateSubmitData} deleteContact={deleteContact} />

        <button onClick={handleOpen} className='border rounded p-2 mt-4 bg-slate-900 text-white font-bold'>View contacts deleted</button>
      </div>

      <ContactFalse handleClose={handleClose} open={open} style={style} deleteDef={deleteDefContact} restoreContact={restoreContact} />
    </>
  )
}

export default App
