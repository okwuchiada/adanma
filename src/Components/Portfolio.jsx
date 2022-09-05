import React from 'react'
import { data, Header } from '.'
import { Socials } from './Home'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { BiLink } from 'react-icons/bi'

const Portfolio = () => {



    return (
        <div className='bg-primaryBlue'>
            <Header />
            <h1 className='text-center text-lg lg:text-2xl uppercase'>Projects</h1>
            <section className='flex bg-primaryBlue flex-col-reverse lg:flex-row lg:justify-evenly justify-between items-center lg:px-10 '>
                <Socials xValue={100} yValue={-400} />
                <div className='flex justify-center flex-wrap items-center gap-4 lg:gap-10 py-6'>
                    {/* <p className='text-[12px] font-bold'>FREELANCING</p> */}
                    {data.projects.map((work, index) => (
                        // <a href={work.link} key={index} className='w-96 border border-[#FFFFFF24] rounded-md py-[24px] px-[21px] w-[400px] h-[220px] flex flex-col justify-between font-poppins hover:shadow-lg hover:scale-110'></a>
                        <motion.div key={index}
                            className='w-60 border-2 border-[#FFFFFF24] shadow-md rounded-md py-[24px] px-[21px] lg:w-[400px]  h-[220px] flex flex-col justify-between font-poppins'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className='text-[23px] font-semibold'>{work.title}</h1>
                            <h2 className='text-[13px]'>{work.desc}</h2>
                            <div className='lg:w-1/3 flex justify-between items-center'>
                                <a href={work.github} className=' text-white px-3 rounded-md lg:text-[20px] text-[16px] font-bold py-1 hover:scale-110 hover:shadow-lg'><FaGithub /> </a>
                                <a href={work.live} className='text-white px-3 rounded-md lg:text-[20px] text-[18px] font-bold py-1 hover:scale-110 hover:shadow-lg'><BiLink /></a>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Portfolio