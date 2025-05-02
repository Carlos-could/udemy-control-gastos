import { useState, ChangeEvent, useMemo } from 'react'

export default function BudgetForm() {

  const [budget, setBudget] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <=0
  }, [budget])

  return (
    <form >
      <div className='flex flex-col space-y-5'>
        <label htmlFor="budget" className='text-4xl'></label>
        <input
          id="budget"
          type="number"
          className='w-full bg-white border border-gray-200 p-2'
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value="definir presupuesto"
        className='bg-blue-600 hover:bg-blu-700 cursor-pointer text-white p-2 mt-5 disabled:opacity-20' 
        disabled={isValid}
      />
    </form>
  )
}
