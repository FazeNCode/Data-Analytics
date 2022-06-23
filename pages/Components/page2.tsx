import Image from "next/image"
import Data from '../Images/Data.png';
const Page2 = () =>{
return(
 <div className=" w-full py-10 px-4 ">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
    <Image className="mx-auto object-contain bg-transparent" src={Data} />
        
        

        <div className="text-white flex flex-col justify-center ">
        <p className="text-2xl text-teal-100 h-16 py-6 text-center uppercase">Data Analytic DashBoard</p>
        <h2 className="font-bold py-8 text-center text-3xl" >Manage Data At Your Fingertips</h2>
        <p className="text-center">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quas reiciendis earum, voluptatibus nemo minus aspernatur officia repellendus? Odit sapiente nostrum ullam accusamus qui nihil perferendis quo sit, architecto cumque eligendi ducimus debitis. Architecto fuga ducimus dolore perferendis nesciunt cumque?
        </p>
        <button className="bg-teal-100 rounded-xl text-2xl font-semibold w-[300px] mx-auto my-6 py-3 text-black">Learn More</button>
        </div>

    </div>
</div>
)
}
export default Page2