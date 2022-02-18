import React from 'react'
import '../styles/InfoBlock.scss'

const InfoBlock = ({title, subtitle, image, content, order}) => {
  return (
    <div className={`InfoBlock ${order%2==0 ? 'InfoBlock-right' : 'InfoBlock-left'}`}>
      <div className={`main-cont ${order%2==0 ? 'main-cont-right' : 'main-cont-left'}`}>
        <p className="ib-title">{title}</p>
        <p className='ib-subtitle'>{subtitle}</p>
        <p className={`ib-content ${order%2==0 ? 'right' : 'left'}`} id="ib-content-big" dangerouslySetInnerHTML={{ __html: content}}></p>
      </div>
      <p   className="ib-content" id="ib-content-small" dangerouslySetInnerHTML={{ __html: content}}></p>
      <div className={`img ${order%2==0 ? 'right' : 'left'}`}>  
        <img className={`img ${order%2==0 ? 'right' : 'left'}`} src={image} alt={title}/>
      </div>
    </div>
  )
}

export default InfoBlock