import React from 'react'
import '../styles/InfoBlock.scss'

const InfoBlock = ({title, subtitle, image, content}) => {
  return (
    <div className='InfoBlock'>
      <div className='main-cont'>
        <p className='ib-title'>{title}</p>
        <p className='ib-subtitle'>{subtitle}</p>
      </div>
      <p className='ib-content' dangerouslySetInnerHTML={{ __html: content}}></p>
      <img src={image} alt={title}/>
    </div>
  )
}

export default InfoBlock