import { dossiers } from '@/constant/AppData'
import StatsContainer from '@/components/StatsContainer';
import {  Unlink, FileText, TriangleAlert } from 'lucide-react'
import React from 'react'
import AntecedantContainer from '@/components/dossiers/AntecedantContainer';

const page = () => {



  const statsEntecedant = dossiers[0].antecedents.length
  const statsAllergies = dossiers[0].allergies.length
  const statsMedications = dossiers[0].traitements.length

  const allDossierStats = [
    {
      icons:FileText,
      score:statsEntecedant,
      description:"Antécédents medicaux",
      circleBg:"bg-purple-100 text-purple-700"
    },
    {
      icons:TriangleAlert,
      score:statsAllergies,
      description:"Allergies",
      circleBg:"bg-red-100 text-red-700"
    },
    {
      icons:Unlink,
      score:statsMedications,
      description:"Traitements en cours",
      circleBg:"bg-indigo-100 text-indigo-700"
    }
  ]
  return (
    <main className='container lg:w-[77vw]'>
       <StatsContainer data={allDossierStats}/>
       <AntecedantContainer/>
    </main>
  )
}

export default page
