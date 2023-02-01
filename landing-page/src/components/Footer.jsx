import React from 'react'
import {footerData} from "../data"

import Copy from './Copy'

const Footer = () => {

  const {logo, address, email, phone, list1, list2, socialList, } = footerData

  return (
    <footer>
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

            <div>
              <div>
                <div className="font-extrabold text-primary mb-8" >About</div>
                <ul>
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
                      <a className='text-primary' href={item.href} target="_blank" ></a>
                    </li>
                  )
                })}
              </ul>
              </div>
              <div>
              <div className="font-extrabold text-primary mb-8" >Redes Sociais</div>
              </div>
            </div>

          </div>
      </div>
    </footer>
  )
}

export default Footer