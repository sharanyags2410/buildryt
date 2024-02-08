import React from 'react'
import './joinus.css'
import ppl from './JoinusAssests/asset 1.svg'
import Fade from 'react-reveal'
const Joinus = () => {
  return (
    <div>
     <section className='big-cont'>
     <div className='container'>
        <h1>JOIN BUILDRYT</h1>
        <p>Together we can help create affordable and sustainable homes for everyone</p>
        </div>
     </section>

    <Fade bottom  >
     <section className='about'>
        <div className='main'>
            <div className='about-text'>
                
                    <h2>PARTNER WITH BUILDRYT</h2>
                
                <p>
            Joining as a Buildryt partner is
             hassle-free and complimentary. 
             Simply apply below, and we'll verify 
             your credentials, work history, 
             and experience. Once approved, the onboarding
              process begins. Start your journey as a Buildryt 
              partner today! 
            </p>
            <button>SignUp</button>
            </div>
      
        <div className='imgWrapper'>
        <img src={ppl} alt='svg img'/>
        </div>
        </div>
     </section>
</Fade>

    </div>
  )
}

export default Joinus
