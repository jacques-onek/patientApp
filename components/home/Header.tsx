import { patients } from '@/constant/AppData'
import React from 'react'
import { Card } from '../ui/card'

const Header = () => {



    const date = (new Date().toDateString())

  return (
    <Card  className='flex justify-between px-4 flex-row  border border-slate-200 rounded-md bg-[#edfaf9ee] hover:shadow transition duration-600     text-black py-6 '>
       <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-3xl'>Bienvenue  <span className='text-blue-600'>{patients.prenom}</span>  </h1>
          <p className='font-sans'>Voici un aperçu de votre suivi médical</p>
       </div>
       <div>
         <p>aujourdhui</p>
          <h2 className='font-extrabold text-lg max-md:text-[1.8rem]'>{date} </h2>
       </div>
    </Card>
  )
}

export default Header
