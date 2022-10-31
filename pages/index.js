import { FaMoon } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaCopyright } from 'react-icons/fa'
import Image from 'next/image'
import profile from '../public/3d-casual-life-young-man-with-phone-using-laptop.png'
import color from '../public/3d-fluency-color-palette.png'
import Review from '../components/Review'
import list from '../components/list'
import projects from '../components/projects'
import examp from '../public/Web capture_11-10-2022_224646_localhost.jpeg'
import webpros from '../components/webpros'
import { useState } from 'react'
import { motion } from 'framer-motion'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <motion.div
      initial={{
        x: -100
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      className={darkMode ? 'dark' : ''}>
      <div className=' w-screen min-h-screen pt-8 dark:bg-gray-900 duration-300'>
        <div className=' w-[85%] mx-auto '>
          <div className=' flex justify-between'>
            <h1 className=' text-lg font-bold font-mono md:text-2xl dark:text-white'>PRINCOTEK</h1>
            <div className='flex justify-between items-center gap-x-6 md:gap-x-8'>
              <FaMoon onClick={changeMode} style={{ display: darkMode ? 'none' : 'block', transitionDuration: 2 }} />
              <FaSun onClick={changeMode} style={{ display: darkMode ? 'block' : 'none', color: 'white', transitionDelay: 2 }} />
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 px-3 py-1 text-white font-semibold rounded-sm md:px-4 md:py-2'>Resume</button>
            </div>
          </div>

          <div className=' text-center flex flex-col items-center mt-20'>
            <motion.h1
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: { duration: 1 }
              }}
              className=' text-4xl font-semibold text-teal-500  mb-2 md:text-5xl'>Prince Jonathan</motion.h1>
            <motion.h2
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,


              }}
              transition={{ duration: 1, delay: 1 }}
              className=' text-black text-xl font-medium mb-6 md:text-2xl md:mt-2 dark:text-white'>Developer and Designer</motion.h2>
            <p className=' text-base leading-8 text-gray-500 dark:text-gray-300 max-w-xs md:leading-9'>Freelancer providing services for programming and design content needs. Join me down below and let us get started</p>
            <div className=' flex justify-center items-center my-12 mb-14 gap-x-16'>
              <motion.div
                initial={{ scale: 0, rotate: 360 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
                  
                }}
              >
                <FaTwitter style={{ fontSize: '2em', color: darkMode ? 'white' : 'black' }} />
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 360 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
                  delay: .5
                }}
              >
                <FaInstagram style={{ fontSize: '2em', color: darkMode ? 'white' : 'black' }} />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: 360 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
                  delay: 1
                }}
              >
                <FaWhatsapp style={{ fontSize: '2em', color: darkMode ? 'white' : 'black' }} />
              </motion.div>


            </div>

            <motion.div 
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1,
              }}
              transition={{ duration: 1, delay: 1 }}
              className=' bg-gradient-to-b from-teal-500  to-white dark:from-teal-500 dark:to-gray-900 rounded-full relative w-64 h-64 md:w-72 md:h-72'>
              <Image src={profile} layout='fill' objectFit='contain' alt='' />
            </motion.div>
          </div>

          <div className=' mt-12'>
            <h1 className=' text-2xl font-semibold mb-3 dark:text-white'>Services I offer</h1>
            <p className=' text-base leading-8 text-gray-500 mb-3 dark:text-gray-300'>Since the beginning of my journey as a freelancer designer and developer. I have done sample work for <strong className=' text-teal-500'>businesses</strong> consulted for <strong className=' text-teal-500'>startups</strong> and collaborated with talented individuals to create digital products for both agency and customer use.</p>
            <p className=' text-base leading-8 text-gray-500 dark:text-gray-300'>I offer a wide range of services, including brand design, programming and tutoring</p>

            <div className=' mt-10 grid gap-16 md:grid-cols-2 lg:grid-cols-3 '>

              {list.map(item => {
                return (
                  <Review
                    key={item.id}
                    name={item.name}
                    detail={item.detail}
                    image={item.img}
                  />
                )
              })}
            </div>
          </div>

          <div className=' mt-12'>
            <h1 className=' text-2xl font-semibold mb-3 dark:text-white'>Portfolio</h1>
            <p className=' text-base leading-8 text-gray-500 mb-3 dark:text-gray-300'>Since the beginning of my journey as a freelancer designer and developer. I have done sample work for <strong className=' text-teal-500'>businesses</strong> consulted for <strong className=' text-teal-500'>startups</strong> and collaborated with talented individuals to create digital products for both agency and customer use.</p>
            <p className=' text-base leading-8 text-gray-500 dark:text-gray-300'>I offer a wide range of services, including brand design, programming and tutoring here are some of the projrcts i have done</p>

            <div className=' mt-8 w-full grid gap-10'>
              <h1 className=' text-2xl font-semibold dark:text-white'>Front End Development</h1>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects.map(item => {
                  return (
                    <div className=' relative w-[100%] overflow-hidden rounded-md mx-auto min-h-[12em]  md:min-h-[22vh] lg:min-h-[28vh]' key={item.id}>
                      <Image src={`/${item.img}`} alt='' layout='fill' />
                    </div>

                  )
                })}
              </div>

            </div>

            <h1 className=' text-2xl font-semibold mt-8 md:mb-6 dark:text-white'>Mobile Web App Design</h1>
            <div className=' grid grid-cols-2 md:gap-y-4 lg:grid-cols-4'>
              {
                webpros.map(item => {
                  return (
                    <div className=' relative w-[90%] h-[50vh]' key={item.id}>
                      <Image src={`/${item.img}`} layout='fill' objectFit='contain' alt='' />
                    </div>
                  )
                })
              }

            </div>




          </div>

        </div>

        <footer className=' flex justify-center items-center py-4 mt-8 bg-teal-500 text-white font-sans text-sm font-bold'>Copyright<FaCopyright style={{ marginLeft: 10, marginRight: 10 }} /> 2022, Developer Prince Jonathan</footer>

      </div>
    </motion.div>

  )
}
