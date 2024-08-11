import React from 'react'

const LeftNavMenuItem = ({text, icon, action, className}) => {
  // console.log("*****we are redirecting action*****",action)

  return (
    <div  className={"text-white cursor-pointer text-sm h-10 flex items-center pl-3 mb-[1px] rounded-lg hover:bg-white/[0.15]  " + className}
    onClick={action}
    >
    
      <span className='text-sm mr-5'>{icon}</span>
      {text}
      
    </div>
  )
} 

export default LeftNavMenuItem
