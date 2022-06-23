import React from "react"
import Typed from 'react-typed';
const Page1 = () =>{
    return(
<div className="text-white "> 
    <div className=" flex flex-col items-center justify-center max-w-[90%] mx-auto h-screen w-full">

            <h1 className=" text-teal-100 font-extrabold w-full text-center my-8
             px-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl md:p-2 lg:p-4 ">
            Exploring Data
            </h1>  

             <p className=" text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[5px] p-">Data Analytics 
             </p> 

            <p className=" text-1xl sm:text-2xl md:text-2xl sm:my-2 md:p-4 font-thin tracking-[10px] text-center my-1"> Power in your hands
            </p> 
               
        <div className="my-4">
            <Typed 
            strings={['Manage Learn Grow']} typeSpeed={50} backSpeed={40} loop
            className="text-2xl sm:text-3xl md:text-5xl font-white"/>
        </div>
        <button className="bg-teal-100 rounded-xl text-2xl font-semibold w-[300px] mx-auto my-6 py-3 text-black ">Get Started</button>        
                
    </div>
            
</div>
    )
}
export default Page1