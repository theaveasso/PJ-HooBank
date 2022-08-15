import React from 'react'
import styles from '../styles'
import { clients } from '../constants'

function Clients() {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map(client => (
            <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
              <img className='sm:w-[192px] w-[100px] object-contain' src={client.logo} alt="" />
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Clients