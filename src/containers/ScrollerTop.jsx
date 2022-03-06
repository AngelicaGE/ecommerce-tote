import React, {useEffect, useState} from 'react'
import '../styles/ScrollerTop.scss'
import arrow from '../assets/icons/arrow-up.png'

export const ScrollerTop = () => {
    const [elementStyle, setElementStyle] = useState("hide")
    useEffect(() => {
        console.log("from scroller ", isMenuOpen)
        isMenuOpen?setElementStyle("hide"): setElementStyle("show")
    }, [isMenuOpen])
    

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div onClick={() => scrollToTop()}  className={`up ${elementStyle}`}> 
            <img src={arrow} alt="Scroller Element" />
        </div>
    )
}
