import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ListContact from './ListContact'

const Layout = ({submitData , contacts , updateData , deleteContact}) => {
  return (
    <div className='border border-black p-4 rounded text-xs w-max'>
        <Header />
        <AddContact submitData={submitData} />
        {/* List item contact */}
        <ListContact contacts={contacts} updateData={updateData} deleteContact={deleteContact} />
    </div>
  )
}

export default Layout