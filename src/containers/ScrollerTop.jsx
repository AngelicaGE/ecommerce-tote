import React from 'react'
import '../styles/ScrollerTop.scss'
import arrow from '../assets/icons/arrow-up.png'

export const ScrollerTop = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div className='up' onClick={() => scrollToTop()}> 
            <img src={arrow} alt="" />
        </div>
    )
}
