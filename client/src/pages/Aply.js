import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Titles from "../components/Titles";
import HeaderPage from "../components/HeaderPage";
// import wire from "../assets/img/wire.png";
import cover from "../assets/img/cover.jpeg"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function Aply() {
  const [demande, setDemande] = useState({
    name: "",
    lastName: "",
    age: "",
    adress: "",
    email: "",
    phoneNumber: "",
    note: "",
    cv: "",
    offerId: "",
    type: "offre d'emploi",
  });
  const { id } = useParams();
  const [cv, setCv] = useState("");
  console.log(demande, "demande");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDemande({
      ...demande,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("pdf", cv);
      formData.append("offerId", id);
  
      const response = await axios.post(
        "http://localhost:4000/cv/upload/",
        formData
      );
  
      const { matchScore, commonWords, data } = response.data;
  
      const demandewithCv = {
        ...demande,
        cv: data.frontPath,
        offerId: id,
        age: +demande.age,
        phoneNumber: +demande.phoneNumber,
        score: matchScore,
        matchedSkills: commonWords
      };
  
      const responsedemande = await axios.post(
        "http://localhost:4000/demande",
        demandewithCv
      );
  
      toast.success("Your application has been submitted successfully !");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  

  return (


    <div className="mb-[110px]">
      <HeaderPage img={cover} />
      <Titles title="Job " subtitle="Take the Next Step in Your Professional Journey" marked="Submission" />
      <ToastContainer />

      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">

        <div class="container mx-auto">

          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-3">
                    <label for="full_name">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => handleInputChange(e)}
                      name="name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="full_name">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={(e) => handleInputChange(e)}
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label>Age</label>
                    <input
                      placeholder="Age"
                      type="number"
                      name="age"
                      onChange={(e) => handleInputChange(e)}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="adress">Phone Number</label>
                    <input
                      placeholder="Phone Number"
                      type="number"
                      name="phoneNumber"
                      onChange={(e) => handleInputChange(e)}
                      id="adress"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"

                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="adress">Adress</label>
                    <input
                      type="text"
                      name="adress"
                      id="adress"
                      onChange={(e) => handleInputChange(e)}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Adress"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="country">Email</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="email"
                        id="country"
                        onChange={(e) => handleInputChange(e)}
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        placeholder="email@domain.com"
                      />
                    </div>
                  </div>
                  <div class="md:col-span-5">
                    <label for="country">CV</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="cv"
                        id="country"
                        onChange={(e) => handleFileChange(e)}
                        type="file"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        placeholder="Note"
                      />
                    </div>
                  </div>
                  <div class="md:col-span-5">
                    <label for="country">Note</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="note"
                        id="country"
                        onChange={(e) => handleInputChange(e)}
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        placeholder="Note"
                      />
                    </div>
                  </div>




                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button
                        class="bg-blue p-3 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onSubmit}
                      >

                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

  );
}
