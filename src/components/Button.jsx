import React from 'react'

function Button( {styles} ) {
  return (
    <div>
     <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-md ${styles} hover:scale-105`} type='button'>Get Started</button> 
    </div>
  )
}

export default Button