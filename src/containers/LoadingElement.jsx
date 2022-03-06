// Taken from: https://loading.io/css/
import React from 'react'
import '../styles/LoadingElement.scss'

const LoadingElement = () => {
  return (
    <div className='LoadingElement'>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingElement