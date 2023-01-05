import React from 'react'
import Container from '../../Components/Container'
import Button from '../../Components/Ui/Button'

const ExclusiveDeals = () => {
  return (

          <div className='w-full h-full flex flex-col gap-y-8 justify-center items-center '>
            <h1 className='text-light font-sans text-5xl font-bold'>Subscribe and get exclusive</h1>
            <p className='text-light font-sans text-5xl font-bold text-center'>  deals & offer</p>
            <div className='w-[650px] py-4 bg-light rounded-lg grid grid-cols-5'>
            <input className='col-span-3 pl-4 border-0 outline-none' type={'email'} placeholder='Enter your mail'/>
            <Button width={'w-[180px] '} className='col-span-2  ml-16 bg-primary text-light'>Subscribe</Button>
            </div>
          </div>

  )
}

export default ExclusiveDeals