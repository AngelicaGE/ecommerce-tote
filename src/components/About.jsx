import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { db } from "../firebase/firebase.js";
import { allTechs } from "../helpers/promises.js";
import { useNavigate } from "react-router-dom";

import {
  collection,
  query,
  orderBy,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import "../styles/InfoBlock.scss";

const About = () => {
  const [generalInfo, setGeneralInfo] = useState([]);

  let navigate = useNavigate();
  const goToSocial = (url) =>{
    navigate(url);
  }

  useEffect(() => {
    let tmpArray = [];
    getDocs(query(collection(db, "bloque"), orderBy("order")))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let isInArray = tmpArray.some((item) => item.id === doc.id);
          if (!isInArray) {
            tmpArray = [...tmpArray, { id: doc.id, ...doc.data() }];
          }
        });
        console.log(tmpArray);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setGeneralInfo(tmpArray);
      });
  }, []);

  return (
    <div className="About">
      <div className="two-cards">
        {
          /**** BAZARCITO ****/
          generalInfo.length > 0 ? (
            <div className={`InfoBlock`}>
              <div className="banner-cont">
                <div className="banner-cont-watermark"></div>
              </div>
              <div className={`main-cont`}>
                <p className="ib-title">{generalInfo[0].titulo}</p>
                <p className="ib-subtitle">{generalInfo[0].subtitulo}</p>
                <p className={`ib-content`} id="ib-content-big">
                  Navigate across differemt categories and look at the synopsis
                  of books to see if any title speaks to you. Or go directly to
                  our <NavLink to="/search">search engine</NavLink> in case you
                  have your mind set on a specific title already.
                </p>
              </div>
            </div>
          ) : (
            ""
          )
        }
        {
          /**** CODER HOUSE ****/
          generalInfo.length > 1 ? (
            <div className={`InfoBlock`}>
              <div className="banner-cont">
                <div className="banner-cont-watermark"></div>
              </div>
              <div className={`main-cont`}>
                <p className="ib-title">{generalInfo[1].titulo}</p>
                <p className="ib-subtitle">{generalInfo[1].subtitulo}</p>
                <p className={`ib-content`} id="ib-content-big">
                  I joined the React.js course on the online school Coderhouse.
                  This e-commerce is my final project where I had fun
                  implementing what I learned in this 2 month course.
                </p>
              </div>
            </div>
          ) : (
            ""
          )
        }
      </div>

      <h2 className="pick-group-title rule">Technologies/tools</h2>
      <div className="techs-cont">
        {allTechs.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <img src={`images/${tech.icon}`} alt="icon" height={35} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>

      {
        /**** DEVELOPER ****/
        generalInfo.length >= 2 ? (
          <div className={`DevBlock`}>
            <div className={`main-cont`}>
              <p className="ib-title">{generalInfo[2].titulo}</p>
              <p className="ib-subtitle">I'm a software engineer</p>
              <p>Graduated in dec 2020 from University of ITESM in México.
                  I worked as a QA Automation Engineer at Oracle from feb 2021 to April 2022. <br />
                  Other jobs include: QA databse intern at oracle (6months) and Unity Developer at NGX (4  months) <br />
                  <br />
                  I have great passion for programming and project management, I want to start a career in Web development as a front end developer.
                  I have started my journey learning react and so far I have LOVED the library and hope to keep working on developing amazing projects for the web.</p>
            </div>
          </div>
        ) : (
          ""
        )
      }

      <h2 className="pick-group-title rule">Contact</h2>
      <div className="techs-cont">
          <a href="https://github.com/AngelicaGE/ecommerce-tote" target="_blank"className="tech-card contact">
            <img src={`images/gh.png`} alt="icon" height={45} />
            <p>AngelicaGE</p>
          </a>
          <a href="https://www.linkedin.com/in/ang%C3%A9lica-g%C3%BCemes-estrada/" target="_blank" className="tech-card contact">
            <img src={`images/linkedin.png`} alt="icon" height={45} />
            <p>angélica-güemes-estrada</p> 
          </a>
      </div>
    
    </div>
  );
};

export default About;
