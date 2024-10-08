import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/contextApi'
import { categories } from '../utils/constants'
import LeftNavMenuItem from './LeftNavMenuItem'

const LeftNav = () => {
  const { selectCategories, setSelectedCategory, mobileMenu } = useContext(Context)
  const navigate = useNavigate()

  const clickHandler = (name, type) => {
    console.log("clcick handler clickd********")
    switch (type) {
      case 'category':
        return setSelectedCategory(name);
      case 'home':
        return setSelectedCategory(name);
      case 'menu':
      return false;
      default:
        break;
    }

  }

  




  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all'>
      <div className='flex flex-col px-5'>
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => { 
                  clickHandler(item.name, item.type);
                  navigate('/')
                }}
                className={`${selectCategories === item.name ? "bg-white/[0.15]" : " "}`} />


              {item.divider && <hr className='my-5 border-white/[0.2]' />}


            </React.Fragment>
          )
        })}
        <hr className='my-5 border-white/[0.2]' />
        <div className='text-white text-[12px]'>
          Made by: Ashu
        </div>

      </div>


    </div>
  )
}

export default LeftNav
