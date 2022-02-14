import React from 'react'
import '../styles/ScrollerTop.scss'

export const ScrollerTop = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <button className='up' onClick={() => scrollToTop()}>UP</button>
    )
}
