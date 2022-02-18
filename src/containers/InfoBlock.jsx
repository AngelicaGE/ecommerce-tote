import React from 'react'
import '../styles/InfoBlock.scss'

const InfoBlock = ({title, subtitle, image, content}) => {
  return (
    <div className='InfoBlock'>
      <div className='main-cont'>
        <p className='ib-title'>{title}</p>
        <p className='ib-subtitle'>{subtitle}</p>
        <p className='ib-content' id="ib-content-big" dangerouslySetInnerHTML={{ __html: content}}></p>
      </div>
      <p className='ib-content' id="ib-content-small" dangerouslySetInnerHTML={{ __html: content}}></p>
      <img src={image} alt={title}/>
    </div>
  )
}

export default InfoBlock