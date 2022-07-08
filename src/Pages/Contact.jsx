import React from 'react'
import Footer from '../Components/Footer'
import '../Styles/contact.css'


const ContactCard = ({ link, icon, message }) => {
    return (
        <div className='contact-card'>
            <a className='contact-card-link' href={link}> <i className={icon}></i> {message} </a>
        </div>
    )
}

export const Contact = () => {
    const contacts = [
        {
            link: 'https://www.linkedin.com/in/adanma-okwuchi-b9a8b917b/',
            message: 'LinkedIn',
            icon: 'fab fa-linkedin-in'
        },
        {
            link: 'mailto:okwuchiadanma@gmail.com',
            message: 'Email',
            icon: 'fas fa-envelope'
        },
        {
            link: 'https://twitter.com/_adahh_',
            message: 'Twitter',
            icon: 'fab fa-twitter'
        },

    ]
    return (
        <>

            <div className="contacts__container">
                <div className="contact_message">
                    <h4>
                        I look foward to building amazing projects together.
                    </h4></div>

                <div className='contact-list'>
                    {contacts.map((contact, index) => {
                        return <ContactCard key={index} {...contact} />
                    })}
                </div>

            </div>

            <Footer />
        </>
    )
}
