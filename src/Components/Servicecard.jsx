import React from 'react'

const Servicecard = ({icon,title}) => {
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-2xl rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out '>
        <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>{icon}</div>
        <h1 className='font-semibold text-lg'>{title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam similique reiciendis quisquam voluptas ullam dolores, obcaecati neque iste quod! Delectus vel atque odit quisquam ipsum fugit dolor aliquam cumque debitis.</p>
        <h3 className='text-teal-500 cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out'>Learn More</h3>
    </div>
  )
}

export default Servicecard;