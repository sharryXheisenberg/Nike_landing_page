import React from 'react'
// C:\Users\Saurabh Rajesh Pande\OneDrive\Desktop\front_end_project\Nike\my-project\src\nike_landing_assets
import headerLogo from './images/header-logo.svg'; // Adjust the file extension if it's different
import hamburger from './icons/hamburger.svg'; // Adjust the file extension if it's different
import { navLinks } from './constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img 
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a 
                href={items.href}
                className="font-monts errat leading-normal text-lg text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul> 
        <div className='hidden max-lg:block'>  
          {/* add logic to hamburger button when clicked  */}
            

          <img
            src={hamburger}
            alt='Hamburger'
            width={25}
            height={25}
          />
          
        </div>
      </nav>
    </header>
  )
}

export default Nav