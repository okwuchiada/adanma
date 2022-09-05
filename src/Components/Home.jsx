import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BsPlay } from 'react-icons/bs'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { data, Header } from '.'

export const Socials = ({ xValue, yValue }) => {
    const handles = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            link: data.socialLinks.linkedin
        },
        {
            name: 'Twitter',
            icon: <FaTwitter />,
            link: data.socialLinks.twitter
        },
        {
            name: 'Github',
            icon: <FaGithub />,
            link: data.socialLinks.github
        },


    ]
    return (
        <div
            className='flex lg:flex-col lg:flex hidden lg:mt-0 mt-4 flex-row justify-between items-center'
        >
            {handles.map((link, index) => (
                <motion.a
                    href={link.link}
                    key={index}
                    animate={{ x: xValue, y: yValue }}
                    transition={{ delay: 1, duration: 2 }}
                    className='mb-6 text-[23px] ml-3 lg:ml-0'
                    target={'_blank'} rel="noreferrer"
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>
    )
}

const Home = () => {
    return (
        <div className='h-screen'>
            <Header />
            <section className='bg-primaryBlue h-[80%] flex lg:flex-row flex-col-reverse items-center justify-evenly'>
                <Socials xValue={100} yValue={0} />
                <div className='flex items-center lg:w-1/2 w-full px-6'>
                    <div>
                        {/* <img src="/images/hero-image.svg" alt="" className='object-cover w-96 lg:block hidden' /> */}
                    </div>
                    <div className='flex flex-col items-center'>
                        <motion.h2 initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='font-bold text-[28px] lg:text-[37px]'>Hello, I'm {data.name}</motion.h2>
                        <p className='text-[16px] lg:text-[20px] lg:ml-3 font-poppins'>{data.about} </p>

                        <Link to='/portfolio' className='bg-primarySecondary text-primaryTertiary py-2 px-3 rounded-lg flex items-center mt-8 w-max font-semibold'>View Portfolio  <span className='text-[18px]'><BsPlay /></span></Link>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home