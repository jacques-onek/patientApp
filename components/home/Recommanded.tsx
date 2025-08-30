import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { ArrowRight, BedSingle } from 'lucide-react';
import Circle from '../Circle';
import { recommandations } from '@/constant/AppData';
import { Button } from '../ui/button';

const Recommanded = () => {

    const LatestRecommandations = (recommandations.at(-1));
  return (
    <Card className='h-auto w-full border shadow'>
      <CardHeader className='flex w-full justify-between ' >
        <div className='flex gap-x-2 '> 
            <MdOutlineTipsAndUpdates className='size-6'/> 
          <CardTitle className='font-bold text-lg'>Conseil santé du jour</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
      <div className='flex w-full  px-6 gap-4 text-sm mb-3'>
                <div className='bg-blue-500 text-white p-1 place-content-center rounded-full text-center'>
                  <Circle icons={BedSingle}  classStyle={"rounded-full "} />
                </div>
                <div className='flex justify-start text-start gap-y-0  flex-col'>
                    <h1 className='font-bold text-balance'>{LatestRecommandations?.titre}</h1>
                </div>
                    
        </div>
        <div className="flex flex-col w-full px-6  gap-3">
          <p className='text-[1.11rem] font-light text-gray-500 mb-2'>{LatestRecommandations?.description}</p>
         <p className='bg-green-100 text-green-700 w-fit rounded-2xl py-2 px-4 text-sm font-medium'>{LatestRecommandations?.categorie} </p>
        </div>
        <Button className='flex gap-x-2  w-full bg-blue-600 text-white hover:bg-blue-700 mt-6 justify-center'>
          <p>Voir tout vos rendez-vous</p>
          <ArrowRight/>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Recommanded
