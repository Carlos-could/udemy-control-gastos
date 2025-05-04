import { useState, FormEvent, ChangeEvent } from 'react'
import type { DraftExpense, Value } from '../types'
import { categories } from '../data/categories'
import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import ErrorMessage from './ErrorMessage'
import { useBudget } from '../hooks/useBudget'



export default function ExpenseForm() {

   const [expense, setExpense] = useState<DraftExpense>({
      amount: 0,
      expenseName: '',
      category: '',
      date: new Date()
   })

   const [error, setError] = useState('')
   const { dispatch } = useBudget()

   const handleChangeDate = (value: Value) => {
      setExpense({
         ...expense,
         date: value
      })
   }

   const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
   ) => {
      const { name, value } = e.target
      const isAmountField = ['amount'].includes(name)
      setExpense({
         ...expense,
         [name]: isAmountField ? Number(value) : value
      })

   }

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (Object.values(expense).includes('')) {
         setError('todos los campos son obligatorios')
         return
      }
      //agregar
      dispatch({type:'add-expense', payload: { expense}})
   }
   return (
      <form className='space-y-5' onSubmit={handleSubmit}>
         <legend
            className='text-center text-2xl border-b-2'
         >
            Nuevo gasto
         </legend>

         {error && <ErrorMessage>{error}</ErrorMessage>}

         <div className='flex flex-col gap-2'>
            <label htmlFor="expenseName"> Nombre de gasto:</label>
            <input
               type="text"
               id='expenseName'
               placeholder='Aniade el nombre del gasto'
               className='bg-slate-100 p-2'
               name='expenseName'
               value={expense.expenseName}
               onChange={handleChange}
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
               onChange={handleChange}
            />
         </div>
         <div className='flex flex-col gap-2'>
            <label htmlFor="category"> Categoria</label>
            <select
               id='category'
               className='bg-slate-100 p-2'
               name='category'
               value={expense.category}
               onChange={handleChange}
            >
               <option value="">--Seleccione--</option>
               {categories.map(category => (
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
               onChange={handleChangeDate}
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
