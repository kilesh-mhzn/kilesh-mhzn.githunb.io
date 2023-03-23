import React, { useState } from 'react';
import {logo} from '../assets'

const Navbar = () => {
  const menuList = [
    
    {name: 'home'},
    {name: 'expertise'},
    {name: 'work'},
    {name: 'experience'},
    {name: 'contact'},
  ]
  return (
    <>
      <nav className="flex items-center justify-between p-10">
        <div className='w-1/5'>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="flex gap-8">
        {
          menuList.map((menu, index) => {
            return (
              <li 
                key={index} 
                className="relative font-sono cursor-pointer text-white hover:text-slate-200"
              >
                //&nbsp;{menu.name}
                &nbsp;
                <span className="absolute text-xs -top-4 right-2">{index.toString().padStart(2, '0')}</span>
              </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar