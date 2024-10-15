import React from 'react'
import Link from 'next/link'
import './Navbar.css';
import { BiUserCircle, BiSearch} from 'react-icons/bi';
import { RiArrowDropDownFill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav>
      <div className='left'>
        LOGO
        <div className='searchbox'>
          <BiSearch className='searchbtn'/>
          <input type='text' placeholder='Search For a Movie'/>
        </div>
      </div>
      
      <div className='right'>
        <p className='dropdown'>kathmandu<RiArrowDropDownFill className="dropicon" /></p>
        <Link href="/" className='theme_btn1 Linkstylenone'>Logout</Link>
        <Link href="/" className='linkstylenone'>
        <BiUserCircle className='theme_icon1'/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar