import React from 'react'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { Filter, Search } from 'lucide-react'
import { Button } from '../ui/button'

const SearchCard = () => {
  return (
    <Card className=' bg-white w-full'>
      <div className='flex gap-x-3 max-md:flex-col max-md:gap-y-4 py-2 px-4 items-center'>
        <div className='flex w-full items-center gap-1.5'>
          <Search className='size-5 text-gray-400 '/>
            <Input className='focus:border-0 max-md:text-sm' placeholder='Recherchez  par medecin , specialite ou status' />
        </div>
          <div className='flex gap-2  items-center max-md:mt-1'>
            <Filter className='size-6 text-slate-400 '/>
             <Button className='bg-blue-800'> touts</Button>  
             <Button className='bg-white border text-slate-900 hover:bg-blue-100'> A venir</Button>  
             <Button className='bg-white border text-slate-900 hover:bg-blue-100'> passee</Button>  
          </div> 
      </div>
    </Card>
  )
}

export default SearchCard
