import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import farmer from '../assets/env.svg';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Home() {

  return (
    
          <div className=" flex font-ubuntu bg-green">

              <div className=" relative w-1/2 flex justify-center items-center overflow-hidden ">
   
                  <div className=" z-10  ">
                      <img src={ farmer } className=" w-[350px]  " /> 
                  </div>

                  <div className=" absolute -top-[300px] -left-[100px] w-[700px] h-[700px] rounded-full bg-light "></div> 

                  <div className=" absolute -bottom-[200px] -left-[150px] w-[400px] h-[400px] rounded-full bg-light "></div> 

                  <div className=" absolute bottom-[60px] left-[260px] w-[80px] h-[80px] rounded-full bg-light "></div> 

                  <div className=" absolute h-[200px] w-[200px] border-2 border-yellow border-t-0 border-r-0 left-[20px] bottom-[20px] "></div>

                  <div className=" absolute h-[200px] w-[250px] border-2 border-yellow border-b-0 border-r-0 left-[20px] top-[20px] "></div>

              </div>

              <div className=" relative w-1/2 h-[609px] flex justify-center items-center overflow-hidden ">

                    <div className=" absolute left-60 w-[400px] p-6 space-y-4 z-10 ">

                        <h1 className=" text-4xl text-white" > Burmese Agriculture </h1>
                        <p className=" bg-yellow h-[2px] w-full ">  </p>
                        <p className=" text-base font-bold text-white leading-8" > စိုက်ပျိူးရေးနှင့် ပတ်သတ်သော ယေဘုယျ အသိပညာများအား မျှဝေလိုသောကြောင့် ဖန်တီးထားခြင်းဖြစ်ပါသည်။ </p>
                        <NavLink to= '/blogs' >
                            <button className='mt-4 p-2 px-6 text-white rounded-full duration-300 bg-green hover:px-10' > See Blogs <span className=' text-sm' > <FontAwesomeIcon icon={ faAngleDoubleRight } /> </span> </button>
                        </NavLink>

                    </div>

                    <div className=" absolute -right-[250px] -top-[35px] w-[1000px] h-[1000px] rounded-full bg-light "></div>

                    <div className=" absolute h-[250px] w-[280px] border-2 border-yellow border-b-0 border-l-0 right-[20px] top-[20px] "></div>

                    <div className=" absolute h-[180px] w-[200px] border-2 border-yellow border-b-0 border-l-0 right-[40px] top-[40px] "></div>

              </div>

          </div>

  )
}

export default Home;
