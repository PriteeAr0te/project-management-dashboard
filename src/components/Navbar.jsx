import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { MdSpaceDashboard } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className="bg-extra-light mb-2 font-light px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="flex justify-between h-16 items-center">
        <Link to="/" className="flex-shrink-0 flex items-center h-fit">
          <img
            className="h-8 w-auto"
            width={200}
            height={60}
            src={Logo}
            alt="TalentDeck Logo"
          />
          <span className="ml-2 font-semibold hidden md:block sm:text-lg text-foreground h-fit line-clamp-2 leading-5">Product<br />Management</span>
        </Link>

        <div className="flex items-center space-x-4 h-fit">

          <Link
            to="/"
            className={`flex w-fit h-fit text-sm whitespace-nowrap sm:text-base cursor-pointer justify-center rounded-md px-3 py-2 font-medium text-foreground hover:bg-light focus:border-0 focus:outline-none`}
          >
            <span className='sm:hidden block'> <MdSpaceDashboard size={24} /></span>
            <span className='sm:block hidden'>Dashboard</span>
          </Link>

          <Link
            to="/add-product"
            className={`flex w-fit h-fit text-sm whitespace-nowrap sm:text-base cursor-pointer justify-center rounded-lg bg-primary px-3 py-2 font-normal text-white hover:bg-dark focus:border-0 focus:outline-none`}
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar