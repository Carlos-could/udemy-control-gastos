import { useState } from 'react'
import { categories } from '../data/categories'
import type { DrafExpense } from '../types'
import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'



export default function ExpenseForm() {

  const [expense, SetExpense] = useState<DrafExpense>({
    amount:0,
    expenseName: '',
    category: '',
    date: new Date()
  })

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
            value={expense.expenseName}
         />
      </div>
      <div className='flex flex-col gap-2'>
         <label htmlFor="amount"> Cantidad:</label>
         <input 
            type="number" 
            id='amount'
            placeholder='Aniade la cantidad del gasto'
            className='bg-slate-100 p-2'
            name='amount'
            value={expense.amount}
         />
      </div>
      <div className='flex flex-col gap-2'>
         <label htmlFor="category"> Categoria</label>
         <select 
            id='category'
            className='bg-slate-100 p-2'
            name='category'
            value={expense.category}
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
      <div className='flex flex-col gap-2'>
         <label htmlFor="amount"> Fecha gastos:</label>
        <DatePicker
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
        />
      </div>
      <input 
         type="submit"
         className='bg-blue-600 cursor-pointer w-full p-2 text-white rounded-lg'
         value="Registrar gasto"
         />

    </form>
  )
}
