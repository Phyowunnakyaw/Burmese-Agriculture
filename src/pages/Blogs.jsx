import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleRight, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function BlogPage( { datas } ) {

   const [ blogs, setBlogs ] = useState( [] );
   useEffect( () => { 
       setBlogs( datas.blogs )
    }, [ datas ] )

  return (
         
         <div className=' font-ubuntu bg-green p-8 '>

              <div className=" max-w-7xl mx-auto grid grid-cols-2 gap-8  ">

              { blogs.map( blog => (

                  <div className=" flex items-center gap-8 bg-milk rounded-l-none rounded-xl" key={ blog.id } >

                      <div className=" w-[40%] p-1 border-2 rounded-l-none rounded-full border-light ">

                          <img src={ `/img/${blog.id}.jpg` } alt="image" className=' w-80 h-48 rounded-l-none rounded-full ' />

                      </div>

                      <div className=" w-[60%] p-4 pr-12 ">

                          <div className=" flex ">

                              <p className=' text-xs text-light pr-2 border-y-0 border-l-0 border-2 border-light ' > 
                                <FontAwesomeIcon icon={ faUser } />  
                                <span className='text-xs text-black ' > { blog.Author } </span> 
                              </p>

                              <p className=' text-xs pl-2 text-light ' > 
                                <FontAwesomeIcon icon={ faCalendar } />  
                                <span className='text-xs text-black' > { blog.Date } </span> 
                              </p>

                          </div>

                          <h1 className='mt-6 text-sm font-bold leading-7'> { blog.Title } </h1>

                          <NavLink to= { `/blog/${ blog.id }` } >
                                <button className=' mt-4 p-2 px-6 text-white rounded-full duration-300 bg-green hover:bg-light' > See More <span className=' text-sm' > <FontAwesomeIcon icon={ faAngleDoubleRight } /> </span> </button>
                          </NavLink>

                      </div>

                  </div>

                ) )

              }

              </div>

         </div>
  )
}
