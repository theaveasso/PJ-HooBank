import React from 'react'
import { logo } from '../assets'
import styles from '../styles'
import { footerLinks, socialMedia } from '../constants'

function Footer() {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img className={`w-[190px] h-[68px] object-contain`} src={logo} alt="logo" />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 '>
          {footerLinks.map(footerLink => (
            <div className={`flex flex-col ss-my-0 my-4 min-w-[150px]`} key={footerLink.title}>
              <h4 className='foot-poppins font-normal text-[16px] leading-[25px] text-dimWhite'>{footerLink.title}</h4>

              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li className={`font-poppins font-normal text-[16-px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`} key={link.name}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
          <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'> Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
          <div className='flex flex-row md:mt-0 mt-6 justify-center'>
            {socialMedia.map((social, index) => (
              <img key={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} src={social.icon} alt={social.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer