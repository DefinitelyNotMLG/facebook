import React, { useState ,useEffect, useRef }from 'react';
import './index.css';
import {ReactComponent as BellIcon} from './icons/bell.svg';
import {ReactComponent as ArrowIcon} from './icons/arrow.svg';
import {ReactComponent as BoltIcon} from './icons/bolt.svg';
import {ReactComponent as CaretIcon} from './icons/caret.svg';
import {ReactComponent as ChrevronIcon} from './icons/chevron.svg';
import {ReactComponent as CogIcon} from './icons/cog.svg';
import {ReactComponent as MessengerIcon} from './icons/messenger.svg';
import {ReactComponent as PlusIcon} from './icons/plus.svg';
import {CSSTransition} from 'react-transition-group';

function App() {
  return (
  <Navbar>
     <NavItem icon={<PlusIcon/>}/> 
     <NavItem icon={<BellIcon />}/>
     <NavItem icon={<MessengerIcon/>} />
     
     <NavItem icon={<CaretIcon/>}>
     <DropdownMenu></DropdownMenu>
    </NavItem>
   </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className='navbar-nav'>{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);
  
    return (
      <li className='nav-item'>
        <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    )
  }
  

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] =useState(null);
  const dropdownRef = useRef(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

function DropdownItem(props) {
  return(
    <a href="#" className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
      <span className='icon-button'>{props.leftIcon}</span>
      {props.children}
      <span className='icon-right'>{props.iconRight}</span>
    </a>
  )
}

return (
<div className='dropdown' style={{ height: menuHeight}} ref={dropdownRef}>
  
  
  <CSSTransition 
  in={activeMenu === 'main'} 
  unnmountOnExit timeout={500} className='menu-primary'
  onEnter={calcHeight}>
  
  <div className='menu'>
  <DropdownItem>My Profile</DropdownItem>
  <DropdownItem
  leftIcon={<CogIcon/>}
  iconRight={<ChrevronIcon/>}
  goToMenu="settings">
    Settings
  </DropdownItem>
  <DropdownItem 
  leftIcon={<ArrowIcon/>} 
  iconRight={<ChrevronIcon>}
  goToMenu='animals'>
  Animals
  </DropdownItem>
  </div>
</CSSTransition>


);
}
export default App;




