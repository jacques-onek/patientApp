import React from 'react'
import { Card } from '../ui/card'
import { FileText } from 'lucide-react'
import AntecentCard from './AntecentCard'
import { dossiers } from '@/constant/AppData'


const AntecedantContainer = () => {

        const data = dossiers[0].antecedents
  return (
    <Card className=' flex flex-col w-full p-4'>
      <header className='flex gap-3 '>
         <FileText className='size-5 text-violet-600'/>
          <h2 className='font-bold'>Antecedant medicaux</h2>
      </header>
      {
        data.map((data) => (
            <AntecentCard data={data} key={data.maladie}/>

        ))
      }
    </Card>
  )
}

export default AntecedantContainer
