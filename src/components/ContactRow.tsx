import { DeleteFilled , EditFilled } from '@ant-design/icons'
import { Modal , Box , Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import React from 'react'

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
  

const ContactRow = ({contact , updateData , deleteContact}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const { register , handleSubmit , setValue } = useForm({
        defaultValues:{
            "id": contact.id,
            "name": contact.name,
            "telephone": contact.telephone
        },
    })

    const handleDelete = (id: string) => {
        deleteContact(id)
    }


    const submitData = (data , e) =>{
        updateData(data , e)
        // console.log(data)
        handleClose()
    }
   

    React.useEffect(() => {
        setValue("id" , contact.id),
        setValue("name" , contact.name),
        setValue("telephone" , contact.telephone)
    })

    return (
        <>
            <div className='border border-black p-2 mb-2 rounded flex flex-row justify-between items-center'>
                {/* Contact Row */}
                {/* infos part */}
                <div>
                    <div>{contact.name}</div>
                    <div className='text-base'>{contact.telephone} <i className="bi bi-trash"></i></div>
                </div>

                {/* Button part */}
                <div className='flex flex-row gap-6'>
                    <div>
                        <a onClick={handleOpen}>
                            <EditFilled />
                        </a>
                    </div>
                    <div>
                        <a onClick={() => handleDelete(contact.id)}>
                            <DeleteFilled className='text-red-700' />
                        </a>
                    </div>
                </div>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="">
                    <Typography id="modal-modal-title" className='text-center' variant="h4" component="h2">
                        Update contact :
                    </Typography>

                    <form action="" method="post" onSubmit={handleSubmit(submitData)}>
                        <div className='mt-4 flex flex-col'>
                            <label htmlFor="">Name :</label>
                            <input type="text" id='name' {...register('name')} placeholder='Name' className='border border-black p-1 rounded focus:outline-none' />
                        </div>
                        <div className='mt-4 flex flex-col'>
                            <label htmlFor="">Telephone :</label>
                            <input type="text" id='telephone' {...register('telephone')} placeholder='Telephone' className='border border-black p-1 rounded focus:outline-none' />
                        </div>
                        {/* button */}
                        <div className='flex flex-row justify-evenly'>
                            <div className='mt-4'>
                                <button className='p-2 rounded text-white bg-black hover:bg-slate-600 transition-all .5s ease-linear font-bold'>Update contact</button>
                            </div>
                            <div className='mt-4'>
                                <button onClick={handleClose} className='p-2 rounded text-white bg-red-800 hover:bg-red-600 transition-all .5s ease-linear font-bold'>Cancel</button>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default ContactRow