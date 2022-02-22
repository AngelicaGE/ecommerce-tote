import React, { useState, useEffect } from 'react';
import InfoBlock from '../containers/InfoBlock';
import {collection, query, orderBy, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

const About = () => {
  const [generalInfo, setGeneralInfo] = useState([]);

  useEffect( () =>  {
    console.log("hola")
    const db = getFirestore();
    let tmpArray = [];
    getDocs(query(collection(db, 'bloque'), orderBy('order'))).then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        let isInArray = tmpArray.some(item => item.id === doc.id);
        if(!isInArray){
          tmpArray = [...tmpArray, {"id": doc.id, ...doc.data()}];
        }
      });
      console.log(tmpArray)
    }).catch((error) =>{
      console.log(error)
    }).finally( () =>{
        setGeneralInfo(tmpArray)
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
              order={block.order}
            ></InfoBlock>
          ))
        }
    </div>
  )
}

export default About