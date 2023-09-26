
import '../Styles/Header.scss'
import Logii from '../asseets/images/dog-transparent.png'
import Doggi from '../asseets/images/two-dogos-transparent.png'
import {Link} from 'react-router-dom'
import { FaPaw} from 'react-icons/fa'
import {CgMenu} from 'react-icons/cg'
import { useState } from 'react'


function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false)

function toggleMenu() {
  setIsMenuOpen(!isMenuOpen)
}

const textClassName = `text ${isMenuOpen ? 'with-margin' : ''}`;


    return (
      <header>
        <div className="header">
          <div className="logo">
            <img className='logoImg' src={Logii} alt="" />
          </div>


          <div className='navBar'>
          <div onClick={toggleMenu} className='menu-icon'>
            <CgMenu size={'2rem'} />
          </div>
          
            <ul className={`nav ${isMenuOpen ? 'open' : ''}`} >

              <li className='bath'>
                <Link className='lis' style={{ textDecoration: 'none' }} to='/bath'> Bath </Link>
                </li>
              <li> <Link className='lis' style={{ textDecoration: 'none' }} to='/hotel'> Hotel </Link></li>
              <li>
              <Link className='lis' style={{ textDecoration: 'none' }} to='/getdog'> Get Dog </Link>
                </li>
              <li>
              <Link className='lis' style={{ textDecoration: 'none' }} to='/hotel'> Contact </Link>
              </li>
             
             
            </ul>
          </div>

        </div>

        <div className={`text ${textClassName}`}>
          <>
          <div className='animation-left'>
            <div className='pet-home'>
            <h1> <span className='best'> Best </span>
            <span className='home'>Home</span> for your <span className='home'>Pet </span>   </h1>
            </div>
         
            <div className='wave-icon'>
            <FaPaw size={'2rem'}/>
            </div>
            </div>
            </>
            <div className='animation-right'>
              <img className='two-doggo' src={Doggi} alt="" />
            </div>
        
           
        </div>
      </header>
    );


}


export default Header