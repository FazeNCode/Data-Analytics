import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from './Components/navigation'
import Page1 from './Components/page1'
import Data from '../Data.png'
import Page2 from './Components/page2'
import Newsletter from './Components/newsletter'
import Cards from './Components/cards'
import { Fragment } from 'react'
import Link from 'next/link'
import Footer from './Components/footer'





const Home: NextPage = () => {
  return (
    <div className='mx-auto max-w-full'>
      
     
     <Navigation/>
     <Page1/>
     <Page2/>
     <Newsletter/>
     <Cards/>
     <Footer/>


{/* The Code below is for testing purposes, it's function is to load component items individually */}

     {/* <Fragment  >
      <ul className='flex text-white justify-center items-center '>
        <li className='hover:text-2xl  '>
        <Link className='' href='Comonents/navigation'>
      Navigation
        </Link>
        </li>

        <li className='hover:text-2xl'>
        <Link  href='Comonents/page1'>
      Page1
        </Link>
        </li>

        <li className='hover:text-2xl '>
        <Link href='Comonents/page2'>
      Page2
        </Link>
        </li>

        <li className='hover:text-2xl '>
        <Link href='Comonents/newsletter'>
      NewsLetter
        </Link>
        </li>

        <li className='hover:text-2xl '>
        <Link href='Comonents/cards'>
      Cards
        </Link>
        </li>

        <li className='hover:text-2xl '>
        <Link href='Comonents/footer'>
      Footer
        </Link>
        </li>

      </ul>
     </Fragment>
    */}
    
     
     
    </div>

    
  )
}

export default Home
