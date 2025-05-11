import { certifications } from "@/assets/assets";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Certifications = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='certifications' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'>My Certifications</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>Verified Skills</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                A collection of certifications that validate my technical knowledge and practical expertise.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                {certifications.map((project, index) => (
                    <a href={project.link} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:shadow-neon cursor-pointer dark:hover:shadow-neon' style={{ backgroundImage: `url(${project.image})` }}>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.issuer}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt='right-arrow' className='w-4' />
                                </div>
                            </div>
                        </motion.div>
                    </a>
                ))}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:shadow-neon cursor-pointer dark:hover:shadow-neon' style={{ backgroundImage: `url('cert-imgs/open-to-learn.jpg')` }}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>Open to Growth</h2>
                            <p className='text-sm text-gray-700'>Learning New Skills</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Certifications
