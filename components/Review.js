import { FaPills } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'
import Image from 'next/image'
import color from '../public/3d-fluency-color-palette.png'

function Review(props) {
  return (
    <div className=' text-center shadow-xl dark:bg-white dark:shadow-gray-500 dark:shadow-lg  flex flex-col p-6 items-center rounded-md leading-10'>
      <div className=' w-24 h-24 relative'>
        <Image src={`/${props.image}`} alt='' objectFit='contain' layout='fill'/>
      </div>

      <h3 className=' text-lg font-semibold'>{props.name}</h3>
      <h4 className=' leading-6 text-base font-semibold py-2'>{props.detail}</h4>
      <h1 className=' my-4 text-xl text-teal-500 font-semibold'>Packages I offer</h1>
      <p className=' text-base mb-3 font-semibold text-gray-600'>Figma</p>
      <p className=' text-base mb-3 font-semibold text-gray-600'>React</p>
      <p className=' text-base mb-3 font-semibold text-gray-600'>React Native</p>
      <p className=' text-base mb-3 font-semibold text-gray-600'>Next js</p>
      <p className=' text-base mb-3 font-semibold text-gray-600'>Python</p>
      <p className=' text-base mb-3 font-semibold text-gray-600'>PHP</p>
      <p className=' text-base mb-3 font-semibold text-gray-600'>Vanilla JS</p>
      <p className=' text-base font-semibold text-gray-600'>And lots more</p>
    </div>
  )
}

export default Review