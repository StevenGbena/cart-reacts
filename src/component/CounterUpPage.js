import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import './Count.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faHandshake, faStamp } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
const CounterUpPage = () =>  {
    const [counterOn , setCounterOn] =useState(false)
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <h1 className='h1_credentials'>Our Credentials</h1>
            <div className='animate'style={{
        width:'100%',
        // background:'white',
        // marginTop:'1000px',
        // marginBottom:'300px',
        color: 'white',
        // padding: '50px'
    }} >
       <h1 className='style'>
  
        Happy client  <FontAwesomeIcon className='shake' icon={faHandshake} /><br/>
       {counterOn &&   <CountUp start={0} end={100} duration={2} delay={0}/> }
        +
        </h1>
   
        <h1 className='style2'>
        Partners <FontAwesomeIcon  className='shake' icon={faPeopleArrows} /><br/>
        {counterOn &&   <CountUp start={0} end={50} duration={2} delay={0}/> }
       +
        </h1>

        <h1 className='style3'>
        Experience <FontAwesomeIcon  className='shake'     icon={faSuitcase} /><br/>
        {counterOn &&   <CountUp start={0} end={20} duration={2} delay={0}/> }
       +
        </h1> 
        &nbsp;&nbsp;
        <h1 className='style4'>
       Certififcates <FontAwesomeIcon  className='shake'     icon={faStamp} /><br/>
        {counterOn &&   <CountUp start={0} end={5} duration={2} delay={0}/> }
       +
        </h1> 
    </div>
    </ScrollTrigger>

  )
}

export default CounterUpPage;
