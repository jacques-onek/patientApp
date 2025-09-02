
import React from 'react'
import StatCard from './StatCard';


type  statsdata =  {
    icons:React.ElementType,
    score:number,
    description:string,
    circleBg:string
}[]

const StatsContainer = ({data}:{data:statsdata}) => {

      
    

  return (
    <section className='flex  flex-col lg:flex-row gap-5  w-full '>
       {
        data.map((item)=>(
            <StatCard key={item.description} icon={item.icons} score={item.score} circleBg={item.circleBg} description={item.description}/>
        ))
       }
    </section>
  )
}

export default StatsContainer
