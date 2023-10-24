import React from 'react'
import ContactRow from './ContactRow'

const ListContact = ({contacts}) => {


  return (
    <div className='flex flex-col'>

        <h3 className='text-base mt-2 mb-2'>Total : </h3>
        {contacts.map((contact , i) => <ContactRow contact={contact} key={i} />)}
        

    </div>
  )
}

export default ListContact