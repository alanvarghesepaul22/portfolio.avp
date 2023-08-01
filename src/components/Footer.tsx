import React from 'react'

export default function Footer() {
  return (
    <div className='py-7'>
      <p className='text-center text-gray-500'>&copy; {new Date().getFullYear()} AVP. All rights reserved.</p>
    </div>
  )
}
