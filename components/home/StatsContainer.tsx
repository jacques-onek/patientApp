import { dossiers, recommandations, rendezvous } from '@/constant/AppData';
import { Calendar , Lightbulb} from 'lucide-react';
import React from 'react'
import StatCard from './StatCard';

const StatsContainer = () => {
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
      
      console.log(Object.entries(statSDossier[0]).length);
    

  return (
    <section className='flex  flex-col lg:flex-row gap-5  w-full '>
       {
        allStats.map((item)=>(
            <StatCard key={item.description} icon={item.icons} score={item.score} circleBg={item.circleBg} description={item.description}/>
        ))
       }
    </section>
  )
}

export default StatsContainer
