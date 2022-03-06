import React, {useEffect, useState, useContext} from 'react'
import '../styles/ScrollerTop.scss'
import arrow from '../assets/icons/arrow-up.png'
import { SideMenuContext } from '../context/SideMenuContext'

export const ScrollerTop = () => {
    const {isMenuOpen} = useContext(SideMenuContext)
    const [elementStyle, setElementStyle] = useState();

    useEffect(() => {
        isMenuOpen? setElementStyle("hide"): setElementStyle("show");
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
