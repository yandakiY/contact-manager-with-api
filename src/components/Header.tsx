import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between gap-48'>
        <div className="title font-bold border-black border-b text-4xl">Contacts</div>
        {/* <div className="">
            <button className='add border p-2 rounded text-white bg-black hover:bg-slate-600 transition-all .5s ease-linear font-bold'>Add</button>
        </div> */}
    </div>
  )
}

export default Header