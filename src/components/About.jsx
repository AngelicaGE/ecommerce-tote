import React from 'react';
import InfoBlock from '../containers/InfoBlock';
import selfie from '../assets/images/angie.jpeg'

const About = () => {
  return (
    <div>   
        <h1> Hi, hope you like this book e-commerce.</h1>
        <InfoBlock
          title="About me, the developer"
          subtitle="algun subtitulo"
          image={selfie}
          content="hola este contenido imaginemos es larguisimo"
        ></InfoBlock>

    </div>
  )
}

export default About