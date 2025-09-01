import React from 'react'
import { Card } from '../ui/card'
import {  Calendar, Clock, Locate, User } from 'lucide-react'
import Circle from '../Circle'
import { rendezvous } from '@/constant/AppData'


const RecommandedCard = () => {
  return (

     <section>
      {
        rendezvous.map((appointment) => (
          <Card key={appointment.id} className='h-auto w-full hover:shadow transition duration-600 mb-4'>
            <div className='flex w-full justify-between px-6 pt-4'>
                <div className='flex w-full  px-6 gap-4 text-sm'>
                        <div className='bg-blue-500 text-white  h-10 place-content-center rounded-full text-center'>
                          <Circle icons={User} classStyle={"rounded-full p-2"} />
                        </div>
                        <div className='flex justify-start text-start gap-y-0  flex-col'>
                            <h1 className='font-bold text-balance'>{appointment?.medecin}</h1>
                            <p className='text-sm font-light text-gray-500'>{appointment?.specialite}</p>
                        </div>
                </div>
                <p className='bg-green-100 text-green-700 w-fit text-nowrap justify-self-end rounded-md py-2 max-md:h-8 px-2 text-sm font-medium'>{appointment?.statut} </p>
            </div>
              <div className='flex w-full  max-md:flex-col max-md:gap-5 px-6 gap-20 text-sm text-gray-500'>
                <p className='flex gap-2'>
                   <Calendar className='size-5 text-green-400'/>
                   <span>{appointment.date}</span>
                </p>
                <p className='flex gap-2'>
                   <Clock className='size-5 text-green-400'/>
                   <span>{appointment.heure}</span>
                </p>
                <p className='flex gap-2'>
                   <Locate className='size-5 text-green-400'/>
                   <span>{appointment.lieu}</span>
                </p>
              </div>
              <div className='flex w-full  px-6 gap-20 text-sm text-gray-500 '>
                <p className='py-2 bg-sky-200 px-4 font-bold rounded-md'>{appointment.description} </p>
              </div>
          </Card>

        ))}
        </section>
        
      )

}

export default RecommandedCard
