import React from 'react'

export default function Titles({title,subtitle,marked}) {
  return (
    <div className='my-[100px] text-center '>

    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">{title}<mark class="px-2 text-white bg-blue rounded dark:bg-blue-500">{marked}</mark> </h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{subtitle}</p>
    </div>
  )
}
