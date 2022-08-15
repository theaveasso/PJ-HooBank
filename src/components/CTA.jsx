import React from 'react' 
import styles from '../styles'
import Button from './Button'

function CTA() {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>verything you need to accept card payments and grow your business anywhere on the planet.</p>
      
      <Button styles={'mt-6'}/>
    </div>
  )
}

export default CTA