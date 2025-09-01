import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Circle from '../Circle'
import { Button } from '../ui/button'
import { rendezvous } from '@/constant/AppData'

const LastAppointment = () => {
  const LastAppointment = (rendezvous.at(-1));

  return (
    <Card className='h-auto w-full hover:shadow transition duration-600'>
      <CardHeader className='flex w-full justify-between ' >
        <div className='flex gap-x-2 '> 
          <Calendar/> 
         <CardTitle className='font-bold text-lg'>Dernier Rendez-vous</CardTitle>
        </div>
         <p className='bg-green-100 text-green-700 rounded-full py-2 px-4 text-sm font-medium'>{LastAppointment?.statut} </p>
      </CardHeader>
      <CardContent>
       <div className='flex w-full  px-6 gap-4 text-sm'>
                <div className='bg-blue-500 text-white  h-10 place-content-center rounded-full text-center'>
                  <Circle icons={User} classStyle={"rounded-full p-2"} />
                </div>
                <div className='flex justify-start text-start gap-y-0  flex-col'>
                    <h1 className='font-bold text-balance'>{LastAppointment?.medecin}</h1>
                    <p className='text-sm font-light text-gray-500'>{LastAppointment?.specialite}</p>
                </div>
        </div>
        <div className='flex flex-col w-full  px-6 '>   
          <p className='flex gap-2 items-center text-sm font-light text-gray-500 mt-4'>
             <Calendar className='size-5' />
             <span>
               {LastAppointment?.date}
             </span>
          </p>
          <p className='flex gap-2 items-center text-sm font-light mb-2 text-gray-500 mt-4'>
             <Clock className='size-5' />
             <span>
               {LastAppointment?.heure}
             </span>
          </p>
          <p className='text-sm font-light text-gray-500 mt-2'>
            <span className='font-bold text-light'>Type:</span> {LastAppointment?.specialite}
          </p>
        </div>
        <Button className='flex gap-x-2  w-full bg-blue-600 text-white hover:bg-blue-700 mt-12 justify-center'>
          <p>Voir tout vos rendez-vous</p>
          <ArrowRight/>
        </Button>
      </CardContent>
    </Card>
  )
}

export default LastAppointment
