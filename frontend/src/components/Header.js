import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around bg-pink-300 h-16 items-center'>
      <div className="text-white text-xl cursor-pointer">Login</div>
      <div className="text-white text-xl cursor-pointer">Dashoboard</div>
      <div className="text-white text-xl cursor-pointer">Create Profiles</div>
      <div className="text-white text-xl cursor-pointer">Profiles</div>
    </div>
  )
}

export default Header