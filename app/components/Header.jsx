import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.sahara} alt='profile-img' className='rounded-full w-32' />
            </motion.div>
            <motion.h3 initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }} className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Sahara Aswal <Image src={assets.hand_icon} alt='hand-icon' className='w-6' /></motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Web developer based in India</motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-Ovo'>2 years of corporate experience in the tech industry.</motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href='#contact' className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact me <Image src={assets.right_arrow_white} alt='right-arrow-white' className='w-4' /></motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1.2 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href='https://drive.google.com/file/d/1Li8sb80rn6btA1_BOUOPQzijHLhQZ7Gn/view?usp=drive_link' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black '>My resume <Image src={assets.arrow_icon} alt='download-icon' className='w-4' /></motion.a>
            </div>
        </div>
    )
}

export default Header
