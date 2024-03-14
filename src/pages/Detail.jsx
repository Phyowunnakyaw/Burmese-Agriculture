import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import img from '../../img/01HN0T7GS10PPH4P3T834FS5SQ.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';

export default function Detail( { datas } ) {

  const param = useParams();
  const id = param.id
  const [ blog, setBlog ] = useState( [] );
  useEffect( () => {

    const data = datas.blogs;
    setBlog( data.filter( d => ( d.id == id ) ) );

   }, [ datas ] )

  return (
         
         <div className=' h-[609px] p-8 relative bg-green overflow-hidden'>

              <div className=" absolute z-10">

                  { blog.map( b => (

                  <div className=" grid grid-cols-3 pr-12 ">

                      <div className=" col-span-1 space-y-6 " key={ b.id }>

                          <div className=" w-[80%] p-1 border-2 rounded-l-none rounded-full bg-milk border-green">
                              <img src={ `/img/${b.id}.jpg` } alt="" className=' w-[400px] rounded-l-none rounded-full' />
                          </div>
                          <h1 className=' w-[80%] text-milk font-bold text-lg '> { b.Title } </h1>
                          
                          <div className=' flex items-center gap-2 text-light ' > 
                              <FontAwesomeIcon icon={ faUser } className=' p-2 text-sm font-bold bg-milk rounded-sm' />  
                              <span className='text-xs font-bold text-milk ' > { b.Author } </span> 
                          </div>

                          <div className=' flex items-center gap-2 text-light ' > 
                              <FontAwesomeIcon icon={ faCalendar } className=' p-2 text-sm font-bold bg-milk rounded-sm' />  
                              <span className='text-xs font-bold text-milk' > { b.Date } </span> 
                          </div>

                      </div>

                      <div className=" h-[525px] py-2 pr-2 col-span-2 mt-4 overflow-auto scroll-smooth">

                          <p className=' text-milk font-medium leading-8' > { b.Content } </p>

                      </div>

                  </div>

                  ) ) }

              </div>

              <div className=" absolute -top-[300px] -left-[100px] w-[700px] h-[700px] rounded-full bg-light "></div>

              <div className=" absolute -bottom-[200px] -left-[150px] w-[400px] h-[400px] rounded-full bg-light "></div> 

              <div className=" absolute bottom-[60px] left-[260px] w-[80px] h-[80px] rounded-full bg-light "></div> 

              <div className=" absolute -right-[250px] -top-[35px] w-[1000px] h-[1000px] rounded-full bg-light "></div>

              <div className=" absolute h-[200px] w-[200px] border-2 border-yellow border-t-0 border-r-0 left-[20px] bottom-[20px] "></div>

              <div className=" absolute h-[200px] w-[250px] border-2 border-yellow border-b-0 border-r-0 left-[20px] top-[20px] "></div>

              <div className=" absolute h-[250px] w-[280px] border-2 border-yellow border-b-0 border-l-0 right-[20px] top-[20px] "></div>

<div className=" absolute h-[180px] w-[200px] border-2 border-yellow border-b-0 border-l-0 right-[40px] top-[40px] "></div>

         </div>
  )
}
