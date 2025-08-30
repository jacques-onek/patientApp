import Header from '@/components/home/Header'
import LastAppointment from '@/components/home/LastAppointment'
import Recommanded from '@/components/home/Recommanded'
import React from 'react'



const page = () => {
  return (
    <main  className='flex px-6 w-[80vw] gap-y-20 pt-8 flex-col '>
        <Header/>
        <section  className='flex gap-x-5  w-full h-auto'>
           <LastAppointment/>
           <Recommanded/>
        </section>
    </main>
  )
}

export default page
