import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundUp } from "react-icons/io";

export default function SecondaryButton(props) {
  return (
    <div className=''>
        <Link to='/' className={`text-xs text-[${props.color}] flex items-center gap-1`}>{props.text} <IoIosArrowRoundUp className='rotate-50' /></Link>
        <hr className={`text-[${props.color}] `} />
    </div>
  )
}
