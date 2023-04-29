import { useEffect } from 'react'
import logo from './images/shared/desktop/logo-dark.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  let width = null 
  useEffect(()=>{
    width = window.screen.availWidth
  })
  function toggle_nav(e){
    const nav = document.getElementById('nav')
    const body = document.getElementsByTagName('body')[0]
    if(!e.target.classList.contains('open')){
      nav.setAttribute('class','toggle')
      body.style.overflow = 'hidden'
      // body.style.height = '10vh'
    }
    else{
      nav.removeAttribute('class','toggle')
      body.style.overflowY = 'scroll'
      // body.style.height = '100vh'
    }
    e.target.classList.toggle('open')
  }
  function navigate(){
    const nav = document.getElementById('nav')
    const icon = document.getElementById('nav-icon4')
    const body = document.getElementsByTagName('body')[0]
    if (width > 520){
      icon.classList.toggle('open')
      nav.removeAttribute('class','toggle')
      body.style.overflowY = 'scroll'
    }
    else{

    }
  }
  return (
    <header className='main-header'>
        <img src={logo} alt="" />
        <nav id='nav'> 
            <NavLink onClick={navigate} className='company' to='/about'>OUR COMPANY</NavLink>
            <NavLink onClick={navigate} className='location' to='/location'>LOCATIONS</NavLink>
            <NavLink onClick={navigate} className='contact' to='/contact'>CONTACT</NavLink>
        </nav>
        <aside className='hamburger'>
          <div  onClick={toggle_nav} id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </aside>
    </header>
  )
}

export default Header