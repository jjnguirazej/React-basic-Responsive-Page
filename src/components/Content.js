import React from 'react'
import ImageOne from '../images/Eggs-8.jpg'
import ImageTwo from '../images/eggs.jpg'


const Content = () => {
  return (
    <>
    <div className="flex flex-col justify-cener items-center bg-white h-screen font-mono py-40">
      <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
      <div className='flex flex-col justify-center items-center'>
         <h2 className='text-2lx mb-2'>Eggs Muffins </h2>
         <p className='mb-2'>Crispy, delicious, and nutritions</p>
          <span>$16</span>
      </div> 
    </div>
     <div className="flex flex-col justify-cener items-center bg-white h-screen font-mono py-40">
     <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
     <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2lx mb-2'>Eggs sdfsdfsd </h2>
        <p className='mb-2'>sfdfffffffff and nutritions</p>
         <span>$16</span>
     </div> 
   </div>
   </>

  )
}

export default Content
