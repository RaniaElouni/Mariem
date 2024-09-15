import React, { useEffect } from "react";

import { AOS } from "aos";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import img from "../assets/img/headingod.jpg"
import HorizantalCard from "../components/HorizantalCard";
import Titles from "../components/Titles";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function OffreDeStage() {
  const [offre, setOffre] = useState([]);
  const [department, setDepartment] = useState([]);
 
  // const [skills, setSkills] = useState([]);
  const navigate = useNavigate()
  const fetchAllOffre = async () => {
    try {
      const res = await axios.get("http://localhost:4000/job-offers/offre-de-stage");
      setOffre(res.data);
      console.log(res.data, "data");
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAllDepartment = async () => {
    try {
      const res = await axios.get("http://localhost:4000/services");
      setDepartment(res.data);
      console.log(res.data, "data");
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAllOfferByServices = async (id) => {
    try {
      const res = await axios.get(`http://localhost:4000/job-offers/by-service/${id}`);
      console.log(res.data, "dataaaaaaaaaaaaaaaaa");
      setOffre(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // AOS.init();
    fetchAllOffre();
    fetchAllDepartment()
  }, []);


  const handleDepartmentChange = (event, newValue) => {
   fetchAllOfferByServices(newValue.id)


      console.log(newValue.id, "selected department id");
    
  };

console.log(offre,"offre");

  return (
    <div className='mb-[110px]'>

      <HeaderPage img={img} />

      <Titles title="Offres de " subtitle="Trouvez des Opportunités de Carrière Passionnantes et Postulez Maintenant!" marked="stage" />
      <div className="flex justify-center mx-5 " style={{ marginBottom: "100px" }}>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={department}
          onChange={handleDepartmentChange}
          getOptionLabel={(option) => option.title}
          sx={{ width: 900 }}
          renderInput={(params) => <TextField {...params} label="Choose your desired department" />}
        />
      </div>
      {offre.map((elem) => (
        <div className="m-5">
        <HorizantalCard onClickBtn2={() => navigate(`/apply-stage/${elem.id}`)} service={elem.services.title} title={elem.title} description={elem.description} btn1="Read More" btn2="Apply" skills={elem.offerSkills.map((skill) => skill.Skills.name)} time={elem.created_at} />
        </div>
      ))}
    </div>
  );
}
