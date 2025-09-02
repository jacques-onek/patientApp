import Header from '@/components/rendez-vous/Header'
import RecommandedCard from '@/components/rendez-vous/RecommandedCard'
import SearchCard from '@/components/rendez-vous/SearchCard'
import React from 'react'

const page = () => {
  return (
    <main className='container  '>
      <Header/>
      <SearchCard/>
      <RecommandedCard/>
    </main>
  )
}

export default page
