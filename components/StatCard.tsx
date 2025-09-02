import React from 'react'
import { Card } from './ui/card'
import Circle from './Circle'


type Props = {
  icon:React.ElementType,
  score:number,
  description:string,
  circleBg?:string
}
const StatCard = ({icon,score,description, circleBg}:Props) => {
  return (
    <Card className='flex flex-col lg:w-2/6 justify-center items-center  gap-y-3 hover:shadow transition duration-600'>
       <Circle icons={icon} classStyle={`rounded-full p-2 ${circleBg} ` }  />
        <p className='font-bold'> {score} </p>
        <p className='text-sm font-medium'>{description}</p>
    </Card>
  )
}

export default StatCard
