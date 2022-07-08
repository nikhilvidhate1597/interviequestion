import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
import Parent from './props/parent'


function Nav() {
  return (

<div> 
  <Parent/>
  <ul className="topList">

    <NavLink style={{textDecoration: 'none'}} to='/home'>
    <li className="topListItem">Home </li></NavLink>

    <NavLink style={{textDecoration: 'none'}} to='/about'>
    <li className="topListItem">About </li></NavLink> 

    <NavLink style={{textDecoration: 'none'}} to='/notfound'>
    <li className="topListItem">Not Found </li></NavLink> 

  </ul>
</div>

  )
}

export default Nav