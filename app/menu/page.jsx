import { MenuTabs } from '@/components/MenuTabs'
import React from 'react'

export default function Menu() {
  return (
    <div className="relative isolate top-20  flex-col justify-center items-center">
      <h1 className='text-5xl font-extrabold text-center mb-9 mt-9 bg-amber-500'>Menu</h1>
      <section className='flex justify-center bg-amber-700'>
      <MenuTabs />
      </section>
    </div>
  )
}
