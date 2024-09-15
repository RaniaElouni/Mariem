import React, { useEffect } from "react";

import { AOS } from "aos";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import img from "../assets/img/headingod.jpg"
import HorizantalCard from "../components/HorizantalCard";
import Titles from "../components/Titles";

export default function OffreDemploi() {
  const [offre, setOffre] = useState([]);
  // const [skills, setSkills] = useState([]);
  const navigate = useNavigate()
  const fetchAllOffre = async () => {
    try {
      const res = await axios.get("http://localhost:4000/job-offers");
      setOffre(res.data);
      console.log(res.data, "data");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // AOS.init();
    fetchAllOffre();
  }, []);






  return (
    <div  className='mb-[110px]'>
   
      <HeaderPage  img={img}/>
      
      <Titles title="Offres "  subtitle="Trouvez des Opportunités de Carrière Passionnantes et Postulez Maintenant!" marked="d'Emploi"/>
      {offre.map((elem)=>(
          <div className="m-5">
      <HorizantalCard onClickBtn2={()=>navigate(`/apply/${elem.id}`)} title={elem.title} description={elem.description} btn1="Read More" btn2="Apply" skills={elem.offerSkills.map((skill) => skill.Skills.name)}  time={elem.created_at}/>
      </div>
      ))}
    </div>
  );
}
