import React from 'react'

const fotter = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li>
          <a href='https://github.com/shivam20k' target='block'>Github</a>
        </li>
        
        <li>
          <a href='https://www.instagram.com/shivamkadam205/' target='block'>Instagram</a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UC_hR30gNpXmQuPu5w22hn0w' target='block'>Youtube</a>
        </li>
      </ul>
      <div className='flex gap-3 md:flex-row '>
        <img src='./src/assets/Help-Avatar.svg' alt='avtar'/>
        <div>
          <p className='font-playfair md:flex-row justify-norma'>Have Any Questions</p>
          <a href='https://www.instagram.com/shivamkadam205/' className='font-lato font-medium'>Talk to a Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default fotter
