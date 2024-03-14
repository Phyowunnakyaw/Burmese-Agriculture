import React from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTelegram, faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleRight, faAngleRight, faBasketShopping, faCartShopping, faLocationDot, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
         
         <nav>

              <div className=" font-ubuntu grid grid-cols-5 bg-milk ">
 
                  <div className=" flex items-center justify-center p-8 gap-4 col-span-1 ">

                      <img src= { logo } className=' w-14 bg-white ' />
                      <p className=' text-xl' > Burmese Agriculture </p>

                  </div>

                  <div className=" col-span-4 space-y-[10px] ">

                      <div className=" flex justify-between items-center p-2 px-12 rounded-full rounded-r-none bg-green ">

                          <p className=' text-xs text-white '> Orders of $50 or more qualify fot free shopping! </p>

                          <div className=" flex items-center gap-6 ">

                             <div className=" flex items-center gap-2">

                                 <div className="text-xs text-white"> <FontAwesomeIcon icon={ faLocationDot } /> </div>
                                 <p className=' text-sm text-white'> No. 60, Yadanar Thukha Street, Thingangyun, Yangon, Myanmar </p>

                             </div> 

                             <div className=" bg-white h-5 w-[1px] "></div>

                             <ul className='flex gap-4'>

                                <li className=' text-xl text-white duration-300 hover:text-yellow '> 
                                   <a href="https://www.facebook.com/greenwaymyanmar" target='_blank'> <FontAwesomeIcon icon={ faFacebook } /> </a> 
                                </li>
                                <li className=' text-xl text-white duration-300 hover:text-yellow '> 
                                    <a href="https://t.me/greenwaymyanmar?fbclid=IwAR1BpyGLQ1kFMkHOLrdg-F3LwfqeHZhjOMjAUALH0ZkICw7DQqL9JSDo1Kw" target='_blank'> <FontAwesomeIcon icon={ faTelegram } /> </a> 
                                </li >
                                <li className=' text-xl text-white duration-300 hover:text-yellow '> 
                                   <a href="https://greenwaymyanmar.com" target='_blank'> <FontAwesomeIcon icon={ faWikipediaW } /> </a>
                                </li>

                             </ul>

                          </div>

                      </div>

                      <div className="flex justify-between p-2 px-12 ">

                          <ul className=' flex justify-between items-center gap-8 '>

                             <li className=' relative'> 
                                 <p className=' after:absolute after:left-0 after:bottom-0 after:content-[ ] after:w- after:h-[.1rem] after:bg-green transition-all hover:after:w-[80%] ' > <NavLink to='/'> Home </NavLink> </p>
                             </li>
                             <li className=' relative'> 
                                 <p className=' after:absolute after:left-0 after:bottom-0 after:content-[ ] after:w- after:h-[.1rem] after:bg-green transition-all hover:after:w-[80%] ' > <NavLink to='/blogs'> Blogs </NavLink> </p>
                             </li>
                             <li className=' relative'> 
                                 <p className=' after:absolute after:left-0 after:bottom-0 after:content-[ ] after:w- after:h-[.1rem] after:bg-green transition-all hover:after:w-[80%] ' > <NavLink to=''> Content </NavLink> </p>
                             </li>
                             <li className=' relative'> 
                                 <p className=' after:absolute after:left-0 after:bottom-0 after:content-[ ] after:w- after:h-[.1rem] after:bg-green transition-all hover:after:w-[80%] ' > <NavLink to=''> About Us </NavLink> </p>
                             </li>

                          </ul>

                          <div className=" flex items-center gap-4 ">

                              <div className=" text-lg "> <FontAwesomeIcon icon={ faCartShopping } /> </div>
                              <button className=' p-2 px-6 text-white rounded-full duration-300 bg-green hover:bg-light' > Get A Quote <span className=' text-sm' > <FontAwesomeIcon icon={ faAngleDoubleRight } /> </span> </button>

                          </div>

                      </div>

                  </div>

              </div>

         </nav>
  )
}
