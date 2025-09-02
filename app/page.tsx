import Header from '@/components/home/Header'
import LastAppointment from '@/components/home/LastAppointment'
import Recommanded from '@/components/home/Recommanded'
import StatsContainer from '@/components/StatsContainer'
import React from 'react'
import { dossiers, recommandations, rendezvous } from '@/constant/AppData';
import { Calendar , Lightbulb} from 'lucide-react';


const page = () => {

  const statsAppointment = (rendezvous)
  const statsRecommandations = (recommandations);
  const statSDossier= (dossiers);

  const allStats = [
    {
        icons:Calendar,
        score:statsAppointment.length,
        description:"Rendez-vous enregistrés",
        circleBg:"bg-blue-100 text-blue-700"
    },
    {
        icons:Lightbulb,
        score:statsRecommandations.length,
        description:"Conseils sante enregistrés",
        circleBg:"bg-yellow-100 text-yellow-700"
    },
    {
        icons:Calendar,
        score:Object.entries(statSDossier[0]).length,
        description:"Archive Dossiers médicaux",
        circleBg:"bg-green-100 text-green-700"
    }
  ]
  return (
    <main  className='container'>
        <Header/>
        <section  className='flex max-md:flex-col  gap-4  w-full h-auto'>
           <LastAppointment/>
           <Recommanded/>
        </section>
        <StatsContainer data={allStats} />
    </main>
  )
}

export default page
