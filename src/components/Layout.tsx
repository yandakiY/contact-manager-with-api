import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ListContact from './ListContact'

const Layout = ({submitData}) => {
  return (
    <div className='border border-black p-4 rounded text-xl w-max'>
        <Header />
        <AddContact submitData={submitData} />
        {/* List item contact */}
        <ListContact />
    </div>
  )
}

export default Layout