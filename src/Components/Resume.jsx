import React from 'react'
import { data, Header } from '.'
import { motion } from 'framer-motion'
import { FaBehance, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BiArrowToBottom } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Contact = () => {
    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
    return (
        <div className='h-screen'>
            <Header />
            <section className='font-poppins bg-primaryBlue lg:pl-[100px] px-4 py-6'>
                <div className='flex justify-between items-center'>
                    <div className='lg:w-2/3 w-full flex flex-col justify-between '>
                        <h1 className='lg:text-[37px] text-[26px] font-semibold'>{data.name}</h1>
                        <h2 className='text-[20px] mt-1 lg:mt-0'>{data.title}</h2>
                        <p className='text-[14px] mt-1 lg:mt-0'>
                            {data.decription}
                        </p>
                    </div>
                    <div className='w-1/3 border-l border-[#FFFFFF24] px-4 flex h-[150px] lg:flex hidden'>
                        <div className='flex flex-col justify-between'>
                            <h3>Connect with me</h3>
                            <div className='flex justify-between'>
                                <a href={data.socialLinks.linkedin} className='text-[30px] hover:scale-110 hover:shadow-lg'><FaLinkedin /></a>
                                <a href={data.socialLinks.github} className='text-[30px] hover:scale-110 hover:shadow-lg'><FaGithub /></a>
                                <a href={data.socialLinks.twitter} className='text-[30px] hover:scale-110 hover:shadow-lg'><FaTwitter /></a>
                            </div>
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                            <div className='mt-2 flex items-center'>
                                <span className='text-lg'><BiArrowToBottom /></span>
                                {/* <a href="http://"></a> */}
                                <a href={data.resume} target={'_blank'} rel="noreferrer" className='border rounded-sm px-2 ml-2 py-[2px] text-[12px]'>View Resume</a>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='mt-4'>
                    <div className='flex flex items-center mb-1 border-b lg:border-none'>
                        <h3 className='text-lg'>Skills</h3>
                        <div className='w-80 bg-[#FFFFFF24] h-[0.5px] ml-3 lg:block hidden'></div>
                    </div>
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={list}
                        className='ml-6 list-disc'>
                        {data.skills.map((skill, index) => (
                            <motion.li key={index} className='text-md' variants={item}>
                                {skill.name}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center mb-1 border-b lg:border-none'>
                        <h3 className='text-lg'>Experience</h3>
                        <div className='w-80 bg-[#FFFFFF24] h-[0.5px] ml-3 lg:block hidden'></div>
                    </div>
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={list}
                        className='ml-6'>
                        {data.experience.map((exp, index) => (
                            <motion.li key={index} className='flex flex-col mt-2' variants={item}>
                                <span className='font-semibold text-md' >{exp.company} </span>
                                <span className='text-sm'>{exp.title} - {exp.year}</span>
                                {/* <span>{exp.year} </span> */}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center mb-1 border-b lg:border-none'>
                        <h3 className='text-lg'>Projects</h3>
                        <div className='w-80 bg-[#FFFFFF24] h-[0.5px] ml-3 lg:block hidden'></div>
                    </div>
                    <motion.ul initial="hidden"
                        animate="visible"
                        variants={list}
                        className='list-disc ml-2 text-[14px] mt-2'>
                        {data.projects.map((project, index) => (
                            <motion.li key={index} variants={item} className='text-md mt-2'>
                                {project.title}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <p className='text-[14px] mt-4'>Links to my work can be found<Link to='/portfolio' className='px-2 hover:scale-110 font-semibold'>here.</Link> More details can be provided upon request.</p>
                </div>
                <div className='flex flex-col justify-between lg:hidden mt-4 h-[150px]'>
                    <h3>Connect with me</h3>
                    <div className='flex justify-between'>
                        <a href={data.socialLinks.linkedin} className='text-[30px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaLinkedin /></a>
                        <a href={data.socialLinks.github} className='text-[30px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaGithub /></a>
                        <a href={data.socialLinks.twitter} className='text-[30px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaTwitter /></a>
                    </div>
                    <a href={`mailto:${data.email}`} target={'_blank'} rel="noreferrer">{data.email}</a>
                    <div className='mt-2 flex items-center'>
                        <span className='text-lg'><BiArrowToBottom /></span>
                        {/* <a href="http://"></a> */}
                        <a href={data.resume} target={'_blank'} rel="noreferrer" className='border rounded-sm px-2 ml-3 py-[2px] text-[12px]'>Download Resume</a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contact