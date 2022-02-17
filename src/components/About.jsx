import React, { useState, useEffect } from 'react';
import InfoBlock from '../containers/InfoBlock';
import selfie from '../assets/images/angie.jpeg'
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

const About = () => {
  const [generalInfo, setGeneralInfo] = useState([]);
  
  // ACCESS A SINGLE COLECTION 
  /*
  useEffect(() => {
    const db = getFirestore();
    const bloqueRef = doc(db, "bloque", "TONPLjjTbmedT8s3EqxE");
    getDoc(bloqueRef).then( (snapshot) => {
      console.log(snapshot.exists());
      console.log(snapshot.id);
      console.log(snapshot.data());
      setGeneralInfo({
        id: snapshot.id, 
        ...snapshot.data()}
      )
    })
  }, [])*/

  useEffect(async () =>  {
    console.log("hola")
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "bloque"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      let id = doc.id; 
      let item = {id, ...doc.data()};
      setGeneralInfo([
        ...generalInfo,
        item
      ]);
    });
    console.log(generalInfo)
    /*infoBlock.get().then((querySnapshot) => {
      if(querySnapshot.size == 0){
        console.log("no results");
      }
      setGeneralInfo(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("Error searching blocks", error)
    }).finally(() => {
      console.log("Finished grabing blokcs")
      console.log(infoBlock)
    });*/
  }, [])
  


  return (
    <div>   
        <h1> Hi, hope you like this book e-commerce.</h1>
        {
          generalInfo.map(block =>(
            <InfoBlock
              title={block.titulo}
              subtitle={block.subtitulo}
              image={selfie}
              content={block.contenido}
            ></InfoBlock>
          ))
        }
    </div>
  )
}

export default About