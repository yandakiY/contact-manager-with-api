import React from 'react'
import ContactRow from './ContactRow'

const ListContact = ({contacts , updateData , deleteContact}) => {


  return (
    <div className='flex flex-col'>
        {contacts.length != 0 ? 
            <>
                <h3 className='text-base mt-2 mb-2'>Total : {contacts.length} </h3>
                {contacts.map((contact , i) => <ContactRow contact={contact} key={i} updateData={updateData} deleteContact={deleteContact} />)}
            </>
            :
            <div className='text-red-800 flex flex-row justify-center mt-4 font-bold'>
                No contact finded
            </div>
        }
        

    </div>
  )
}

export default ListContact