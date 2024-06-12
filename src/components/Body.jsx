import React from 'react'

const body = () => {
  return (
    <div className='-space-y-4 lg:flex'>
      <div className='flex items-center  lg:flex-1 lg:h-[400px] lg:order-2 justify-end'>
    <img src='./src/assets/Blue-Shape.svg' alt='lst'className='-rotate-45 h-64 md:h-72 lg:h-[400px]'/>
    <img src='./src/assets/Pink-Shape.svg' alt='Pink'className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'/>
    <img src='./src/assets/Purple-Shape.svg' alt='purple' className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'/>
    <img src='./src/assets/Hero-Model.png' alt='Hero' className='absolute h-64 md:h-72 lg:h-[400px]'/>


      </div>
    <div className='lg flex-1 lg:order-1'>
      <h1 className='text-5xl font-bold font-playfair leading-tight'>Host Your Website in Less Than 5 minutes</h1>
      <p className='font-lato text-gray-400'>With Hoster, get your website up and running in no less than 5 minuties with the most competitive
        using packges
      </p> 
      <form className='flex flex-col gap-2 md:flex-row'>
        <input className='rounded-md px-4 py-3 placeholder:text-red-400' type="email" placeholder='Enter your Email'/>
        <button className='rounded-md px-4 py-3 text-white bg-blue-600'>Join Waitlist</button>
      </form>
      <div>
        <img src="./src/assets/Checkmark.svg" alt="check"/>
        <p className='font-lato text-gray-400'>No Spam ever unsubscribe anytime</p>
      </div>
    </div>
    </div>
  )
}

export default body
