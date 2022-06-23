import React from 'react';

import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, FaDribbbleSquare } from "react-icons/fa";
const Footer = () =>{
    return(
        <div className='max-w-screen mx-auto py-12 px-20 grid lg:grid-cols-2 gap-8 bg-black'>
           
            <div className='text-white bg-black  '>
            <h6 className='text-4xl bg-black font-bold w-[40%] mx-2 rounded-xl cursor-pointer '>DatSafe</h6>
                <p className='py-4 bg-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut itaque, culpa dolorem asperiores possimus ullam sunt modi. Nisi omnis reiciendis assumenda inventore corrupti iste tempora atque perferendis facilis ea.</p>

                <div className="flex justify-between md:w-[75%] my-6 bg-black">
                    <FaFacebookSquare className="cursor-pointer" size={30}/>
                     <FaGithubSquare className="cursor-pointer" size={30}/>  
                     <FaInstagram className="cursor-pointer" size={30}/> 
                     <FaTwitterSquare className="cursor-pointer" size={30}/>
                </div>
            </div>

            <div className="lg:col-span-1 flex justify-center bg-black">
                <div className=''>
                <ul>
                <li className="text-2xl text-white bg-black cursor-pointer "> Home</li>
                <li className="text-2xl text-white bg-black cursor-pointer "> News</li>
                <li className="text-2xl text-white bg-black cursor-pointer "> About</li>
                <li className="text-2xl text-white bg-black cursor-pointer "> Products</li>
                <li className="text-2xl text-white bg-black cursor-pointer  "> Contact</li>
                </ul>
                </div>

              
            </div>
                
            </div>

               

               
        
            
      
    )
}
export default Footer;