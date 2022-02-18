import React, { useState, useEffect } from 'react';
import InfoBlock from '../containers/InfoBlock';
import selfie from '../assets/images/angie.jpeg'
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

const About = () => {
  const [generalInfo, setGeneralInfo] = useState([]);

  useEffect( () =>  {
    console.log("hola")
    const db = getFirestore();
    let tmpArray = [];
    getDocs(collection(db, "bloque")).then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        let isInArray = tmpArray.some(item => item.id === doc.id);
        if(!isInArray){
          tmpArray = [...tmpArray, {"id": doc.id, ...doc.data()}];
          console.log("Aded to state: " + doc.id)
        }
      });
    }).catch((error) =>{
      console.log(error)
    }).finally( () =>{
        setGeneralInfo(tmpArray)
        console.log(generalInfo)
      }
    )
  }, [])
  


  return (
    <div>   
        {
          generalInfo.map(block =>(
            <InfoBlock
            key={block.id}
              title={block.titulo}
              subtitle={block.subtitulo}
              image={block.imagen}
              content={block.contenido}
            ></InfoBlock>
          ))
        }
    </div>
  )
}

export default About