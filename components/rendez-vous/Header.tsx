import { patients } from '@/constant/AppData'
import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Calendar } from 'lucide-react'

const Header = () => {

  return (
    <Card  className='flex justify-between px-4 lg:w-[77vw] flex-row max-md:flex-col w-full border border-slate-200 rounded-md bg-[#edfaf9ee] hover:shadow transition duration-600   text-black py-6 '>
       <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-3xl max-md:text-2xl'>Vos rendez-vous  <span className='text-blue-600'>{patients.prenom} !</span>  </h1>
          <p className='text-gray-600'>Consultez l historiques de vos rendez-vous medical passe et prochaines</p>
       </div>
       <div>
         <Button className='bg-teal-500 p-2 flex '>
          <Calendar/>
          <p>Prendre rendez-vous</p>
         </Button>
       </div>
    </Card>
  )
}

export default Header
