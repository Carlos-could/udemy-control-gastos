import React from 'react'
import { categories } from '../data/categories'

export default function ExpenseForm() {
  return (
    <form className='space-y-5'>
      <legend
         className='text-center text-2xl border-b-2'
      >
         NUevo gasto
      </legend>
      <div className='flex flex-col gap-2'>
         <label htmlFor="expenseName"> Nombre de gasto:</label>
         <input 
            type="text" 
            id='expenseName'
            placeholder='Aniade el nombre del gasto'
            className='bg-slate-100 p-2'
            name='expenseName'
         />
      </div>
      <div className='flex flex-col gap-2'>
         <label htmlFor="amount"> Nombre de gasto:</label>
         <input 
            type="number" 
            id='amount'
            placeholder='Aniade la cantidad del gasto'
            className='bg-slate-100 p-2'
            name='amount'
         />
      </div>
      <div className='flex flex-col gap-2'>
         <label htmlFor="category"> Categoria</label>
         <select 
            id='category'
            className='bg-slate-100 p-2'
            name='category'
         >
            <option value="">--Seleccione--</option>
            {categories.map ( category => (
               <option 
               key={category.id}
               value={category.id}
               >{category.name}</option>
            ))}
         </select>
      </div>
      <input 
         type="submit"
         className='bg-blue-600 cursor-pointer w-full p-2 text-white rounded-lg'
         value="Registrar gasto"
         />

    </form>
  )
}
