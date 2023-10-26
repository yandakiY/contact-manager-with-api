import { CloseOutlined, EditFilled, ReloadOutlined } from '@ant-design/icons'
import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const ContactFalse = ({open , handleClose , style , deleteDef , restoreContact}) => {

    const [contacts_false , setContacts_false] = useState([])

    const handleDeleteDef = (id) =>{
        deleteDef(id)

        setContacts_false(contacts_false.filter(contact => contact.id != id))
    }

    React.useEffect(() => {
        console.log("loading contacts false...")
            
        fetch('http://127.0.0.1:8000/api/contacts_false/')
            .then(data => data.json())
            .then(d => {
                setContacts_false(d)
            })
            .catch(err => console.error(err))

    } , [])
  return (
    <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
            <Box sx={style} className="">
                <Typography id="modal-modal-title" className='text-center font-bold' variant="h4" component="h2">
                    Contacts deleted
                </Typography>


                {contacts_false.length == 0 && 
                    <div className='text-red-800 font-bold m-4 p-1 text-center'>
                        No contacts in the basket
                    </div>
                }

                
                {contacts_false &&  contacts_false.map((contact) => 
                    
                    <div key={contact.id} className='border border-black p-2 mt-3 rounded flex flex-row justify-between items-center'>
                        {/* Contact Row */}
                        {/* infos part */}
                        <div>
                            <div>{contact.name}</div>
                            <div className='text-base'>{contact.telephone} <i className="bi bi-trash"></i></div>
                        </div>

                        {/* Button part */}
                        <div className='flex flex-row gap-6'>
                            <div>
                                <a title='Restore' onClick={() => restoreContact(contact.id)} >
                                    <ReloadOutlined />
                                </a>
                            </div>
                            <div>
                                <a title='Delete permanently' onClick={() => handleDeleteDef(contact.id)}>
                                    <CloseOutlined className='text-red-800' />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                )}
                {/* button */}
                <div className='flex flex-row justify-evenly'>
                    <div className='mt-4'>
                        <button onClick={handleClose} className='p-2 rounded text-white bg-red-800 hover:bg-red-700 transition-all .5s ease-linear font-bold'>Close</button>
                    </div>
                </div>
            </Box>
            

    </Modal>
  )
}

export default ContactFalse