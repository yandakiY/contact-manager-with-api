import React from 'react'
import ContactRow from './ContactRow'

const ListContact = () => {
  return (
    <div className='flex flex-col'>

        <h3 className='text-base mt-2 mb-2'>Total : </h3>
        <ContactRow />
        <ContactRow />
        <ContactRow />

    </div>
  )
}

export default ListContact