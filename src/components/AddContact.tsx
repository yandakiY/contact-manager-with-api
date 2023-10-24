import React from 'react'
import { useForm } from "react-hook-form"

const AddContact = ({submitData}) => {

    const {
        register , handleSubmit , reset
    } = useForm()

     // La fonction pour soumettre les données
    const onSubmit = (data: unknown , e) => {
        submitData(data , e); // Soumet les données
        reset(); // Réinitialise le formulaire après la soumission
    };
    

  return (
    <div className='flex flex-col'>
        <form onSubmit={handleSubmit(onSubmit)} method='post' className='mt-4 flex flex-col sm:flex-row gap-2 items-baseline'>
            <div>
                <input type="text" id="name"{...register("name")} placeholder='Name' className='border border-black p-1 rounded focus:outline-none' />
            </div>
            <div>
                <input type="text" id="telephone" {...register("telephone")} placeholder='Phone number' className='border border-black p-1 rounded focus:outline-none' />
            </div>

            <div className=''>
                <button className='addborder p-2 rounded text-white bg-black hover:bg-slate-600 transition-all .5s ease-linear font-bold'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddContact