"use client"
import React from 'react'
import Link from 'next/link'
import './Navbar.css';
import { BiUserCircle, BiSearch} from 'react-icons/bi';
import { RiArrowDropDownFill } from 'react-icons/ri';
import logo from '@/assets/logo3.png'
import Image from 'next/image'
import LocationPopup from '@/popups/location/LocationPopup'

const Navbar = () => {
  const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false)
  return (
    <nav>
      <div className='left'>
      <Image src={logo} alt="logo" width={100} height={100} />
        <div className='searchbox'>
          <BiSearch className='searchbtn'/>
          <input type='text' placeholder='Search For a Movie'/>
        </div>
      </div>
      
      <div className='right'>
        <p className='dropdown' onClick={()=> setShowLocationPopup(true)}>kathmandu<RiArrowDropDownFill className="dropicon" /></p>
        <Link href="/" className='theme_btn1 Linkstylenone'>Logout</Link>
        <Link href="/" className='linkstylenone'>
        <BiUserCircle className='theme_icon1'/>
        </Link>
      </div>
      {
        showLocationPopup &&
        <LocationPopup
          setShowLocationPopup={setShowLocationPopup}
          />
      }
    </nav>
  )
}

export default Navbar