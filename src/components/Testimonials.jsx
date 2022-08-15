
import { feedback } from '../constants'
import styles from '../styles'
import FeedbackCard from './FeedbackCard'

function Testimonials() {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`${styles.heading2}`}>
          What People are <br className='sm:block hidden' /> saying about us
        </h2>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      { /* testimonials cards */ }
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {
          feedback.map(card => (
            <FeedbackCard key={card.id} {...card} />
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials