import React from 'react';
import { MdAccountCircle } from "react-icons/md";


function TopNav() {
  return (
    <div className='fixed top-4 left-4 right-4 rounded-xl p-2 flex justify-between bg-white'>
        <div><MdAccountCircle />Hi, UserName!</div> 
    </div>
  )
}

export default TopNav;