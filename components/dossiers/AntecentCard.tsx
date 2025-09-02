import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Calendar, User } from 'lucide-react'


type Antecedant = {
    maladie: string;
    dateDiagnostic: string;
    docteur: string;
    statut: string;
}
const AntecentCard = ({data}:{data:Antecedant}) => {
 return (

           <Card className='flex px-4 gap-y-3 border-0 bg-sky-50' key={data.maladie}>
              <div className='flex gap-x-4 items-center'>
                <p className='bg-rose-300 border px-2 py-1 text-sm font-medium rounded-md '>{data.statut} </p>
                <h2 className='text-lg font-bold'>{data.maladie}</h2>
              </div>
              <div className='flex gap-x-4 text-sm text-slate-700'>
                <p className='flex gap-2'>
                   <Calendar className='size-5'/>
                   <span>{data.dateDiagnostic}</span>
                </p>
                <p className='flex gap-2'> <User className='size-5'/> <span>{data.docteur}</span> </p>
              </div>
           </Card>

    

 )
  
}

export default AntecentCard
