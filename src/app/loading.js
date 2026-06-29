import React from 'react'
import { MoonLoader } from 'react-spinners'

function loading() {
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
        <MoonLoader />
    </div>
  )
}

export default loading