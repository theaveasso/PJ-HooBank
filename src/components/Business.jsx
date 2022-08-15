import { Features } from '../constants'
import styles, { layout } from '../styles'
import Button from './Button'

const FeatureCard = ( {title, content, icon, index} ) => (
  <div className={`flex flex-row p-6 rounded-[20px] feature-card cursor-pointer`}> 
      <div className={`w-[50px] h-[50px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img className={`w-[50%] h-[50%]`} src={icon} alt="icon" /> 
      </div> 
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[20px] mb-1'> {title} </h4>
        <p className='font-poppins font-normal text-dimWhite text=[16px] leading-[24px]'>
          {content}
        </p>
      </div>
  </div>
)
function Business() {
  return (
    <section id='features' className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className='sm:block hidden' /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          Features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section >
  )
}

export default Business