"use client"

import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { LucideHeart } from 'lucide-react'
import { sideBarLinks } from '@/constant/SidebarData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AppSidebar = () => {

    const pathName =  usePathname()
    
  return (
    <Sidebar className='bg-white '>
        <SidebarHeader className='h-20 py-4 border-b mb-4  border-gray-200 flex items-center'>
            <div className='flex w-full  px-6 gap-4'>
                <div className='bg-blue-600 mt-2 px-2 py-2 h-10 place-content-center rounded text-center'>
                    <LucideHeart className='text-white font-extrabold ' />
                </div>
                <div className='flex justify-center text-center gap-y-0  flex-col'>
                    <h1 className='font-bold text-lg'>PatientCare</h1>
                    <p className='text-sm font-light'>Portail patient</p>
                </div>
            </div>
        </SidebarHeader>
        <SidebarContent>
         <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu className='px-2'>
                {sideBarLinks.map((menu) => {
                  const isActive = pathName === menu.href;

                  return (
                    <SidebarMenuItem key={menu.href}  className={`px-6 py-1  text-gray-600 hover:bg-sky-200 rounded-md ${isActive ? 'bg-sky-100 border border-blue-400 font-medium text-gray-900' : ''}`}>
                    <SidebarMenuButton  asChild className="hover:bg-inherit border-0 ">
                        <Link href={menu.href}>
                        <menu.icon height={12} width={12} />
                        <span className='font-medium'>{menu.label}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>

                  )
   })}
                </SidebarMenu>
            </SidebarGroupContent>
    </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
