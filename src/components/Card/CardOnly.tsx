import React from 'react'
import rama from '../../../public/img/Hotpot.png';
import Image from 'next/image';


import { useMotionValue, useTransform, motion } from 'framer-motion';

const CardOnly = () => {
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  const warna = [
    { value: '#185bca'},
    { value: '#272425'},
    { value: '#617453'},
    { value: '#f2c754'},
    { value: '#185bca'},
  ]

  return (
    <div style={{ perspective: 2000 }}>
    
    <motion.div
     style={{ x, y, rotateX, rotateY, z:100 }}
     drag
     dragElastic={0.8}
     dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
     whileTap={{ cursor: 'grabbing' }}
     className='w-[426px] min-h-[500px] bg-indigo rounded-[30px] border-[4px] border-white px-[40px] py-[25px] cursor-grab relative'>
        {/* Card Logo*/}
        
        {/* End */}

        <h1 className='text-4xl mb-6 font-extrabold'>
            Kartu Nama Generator
        </h1>

        <p className='max-w-[300px] mb-5 font-bold'>
            Buat Kartu Nama anda dengan Gratis dan mudah hanya dengan sekali klik
            sudah bisa membuat kartu nama dan web redirect

        </p>

        <div className="flex items-center gap-x-[20px] mb-12">
            <button className='bg-[#617453] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
                Coba Sekarang
            </button>
            <div className="text-[24px] font-bold text-[#000]">
                Gratis
            </div>
        </div>


        <div className="flex gap-x-[10px]">
            {warna.map((warna, index) => {
                return(
                    <li key={index} style={{ backgroundColor: warna.value }} className='w-8 h-8 rounded-full cursor-pointer'></li>
                )
            })}
        </div>

        <motion.div 
            style={{ x, y, rotateX, rotateY, z:1000000}}
            className="absolute top-12 -right-64 w-[320px]">
            <Image
             src={rama}
             alt=''
             draggable='false'
              />
        </motion.div>
        
    </motion.div>
    </div>
  )
}

export default CardOnly