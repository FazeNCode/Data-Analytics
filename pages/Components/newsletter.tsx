const Newsletter = () =>{
    return(
       <div className="w-full py-8 text-white my-14  ">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 items-center shadow-xl  rounded-md  ">
   
               <div className="lg:col-span-2  ">
               <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold py-2  text-center sm:text-left"> Tips  tricks to optimzie your performence </h3>
               <p className="text-center sm:text-left">Sign up to our newsletter to stay up to date</p>
               </div>
   
               <div className="my-8  ">
                   <div className="flex flex-col sm:flex-row items-center justify-between w-full  ">
                       <input className="bg-white text-black w-full py-2 mx-auto rounded-lg text-center  " type='email' placeholder="Enter Email:" />
                       <button className="bg-teal-100 rounded-xl text-2xl  font-semibold 
                       w-[250px] mx-4 my-6 py-1 text-black">Subscribe</button>
                   </div>  
                   <p>We care about the protection of your data. Read our <span className="text-teal-100 cursor-pointer"> Privacy  Policy.</span></p>
               </div>          
           </div>
       </div>
       )
   }
   export default Newsletter