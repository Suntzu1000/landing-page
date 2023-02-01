import React from 'react'
import {footerData} from "../data"

import Copy from './Copy'

const Footer = () => {

  const {logo, address, email, phone, list1, list2, socialList, } = footerData

  return (
    <footer data-aos="fade-up" >
      <div className='container mx-auto' >
          <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12' >
            <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start " >
              <a href="/">
                <img className="mb-[65px] " src={logo} alt="" />
              </a>
              <div className="max-w-[260px] mb-5 text-primary font-bold " >
                {address}
              </div>
              <div className='font-light italic ' >
                {email}
              </div>
              <div>
                {phone}
              </div>
            </div>

            <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between' >
              <div>
                <div className="font-extrabold text-primary mb-8" >About</div>
                <ul className="flex flex-col gap-y-4" >
                  {list1.map((item, index) => {
                    return (
                      <li key={index} >
                        <a className="text-primary" href={item.href} target="_blank">
                          {item.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div  >
              <div className="font-extrabold text-primary mb-8" >Ajuda</div>
              <ul>
                {list2.map((item, index) => {
                  return (
                    <li key={index} >
                      <a className='text-primary' href={item.href} target="_blank" >
                        {item.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
              </div>
              <div >
              <div className="font-extrabold text-primary mb-8" >Redes Sociais</div>
              <ul>
                {socialList.map((item, index) => {
                  return (
                    <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all' key={index} >
                      <a className="text-white text-xl hover:text-white " href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                      </a>
                    </li>
                  )
                })}
              </ul>
              </div>
            </div>

          </div>
      </div>
      <Copy/>
    </footer>
  )
}

export default Footer