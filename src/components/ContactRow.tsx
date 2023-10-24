import { DeleteFilled , EditFilled } from '@ant-design/icons'
import React from 'react'

const ContactRow = () => {
  return (
    <div className='border border-black p-2 mb-2 rounded flex flex-row justify-between items-center'>
        {/* Contact Row */}
        {/* infos part */}
        <div>
            <div>Name</div>
            <div className='text-base'>Telephone <i className="bi bi-trash"></i></div>
        </div>

        {/* Button part */}
        <div className='flex flex-row gap-6'>
            <div>
                <a href="#">
                    <EditFilled />
                </a>
            </div>
            <div>
                <a href="#">
                    <DeleteFilled className='text-red-700' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default ContactRow