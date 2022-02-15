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
          content="un poquito sobre mi mis gustos areas y demas"
        ></InfoBlock>
        <hr />
        <InfoBlock
          title="Mi deseo por incursionar mi carrera a web"
          subtitle="Hola Coderhouse"
          image={selfie}
          content="Porque como cuando coderhouse? "
        ></InfoBlock>
        <hr />
        <InfoBlock
          title="Esta vivo!"
          subtitle="Mi primer proyecto de React"
          image={selfie}
          content="Como nacio el e-commerce explicar que es el proyetco desarrollado en Coderhouse..."
        ></InfoBlock>

    </div>
  )
}

export default About