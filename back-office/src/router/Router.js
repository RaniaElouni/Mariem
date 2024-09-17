import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../apps/Main";
import Auth from "../apps/Auth";
import ForgetPassword from "../pages/ForgetPassword";

import Dashboard from "../pages/dashboard/index"
import Profile from "../pages/Profile";
import JobOffre from "../pages/jobOffre/JobOffre";
import Interview from "../pages/Interview";
import Internshipoffer from "../pages/Internshipoffer";
import Condiddature from "../pages/Condiddature";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Condition from "../pages/Condition";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import LoginTest from "../LoginPage/Login";

import JobOffreList from "../pages/jobOffre/JobOffreList";
import AddJobOffre from "../pages/jobOffre/AddJobOffre";
import JobOffreDetail from "../pages/jobOffre/JobOffreDetail";
import InternshipOff from "../pages/internshipOff/InternshipOff";
import InternshipOffList from "../pages/internshipOff/views/InternshipOffList";
import AddInternOff from "../pages/internshipOff/views/AddInternOff";
import InternOffDetail from "../pages/internshipOff/views/InternOffDetail";
import Demandes from "../pages/demandes/Demandes";
import DemandesList from "../pages/demandes/views/DemandesList";
import AddDemande from "../pages/demandes/views/AddDemande";
import DemandeDetails from "../pages/demandes/views/DemandeDetails";
import Employees from "../pages/employees/Employees";
import EmployeeList from "../pages/employees/EmployeeList";
import AddEmp from "../pages/employees/AddEmp";
import StagairesList from "../pages/StagairesList";
// export default function Router() {
//   const user = true;

export const MyContext = createContext("");

const Router = () => {
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(false);

  const getMe = async () => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const resp = await axios.get("http://localhost:4000/auth/me", config);
      setUser(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMe();
  }, [update]);
  console.log(update,"update from router");
  
  return (
    <div>
      <BrowserRouter>
        <MyContext.Provider value={user}>
          <Routes>
            {user ? (
              <Route path="/" element={<Main />}>
                <Route index element={<Dashboard />} />
                <Route
                  path="profile"
                 
                  element={
                    <PrivateRoute
                    component={<Profile update={update} setUpdate={setUpdate} />}
                      roles={["Admin", "ResponsableRH"]}
                    />
                  }
                />
                <Route
                  path="employees"
                 
                  element={
                    <PrivateRoute
                    component={<Employees  />}
                      roles={["Admin", "ResponsableRH"]}
                    />
                  }
                >
                  <Route index element={<EmployeeList />} />
                  <Route path="add-employee" element={<AddEmp />} />

                </Route>
                <Route
                  path="stagaires"
                 
                  element={
                    <PrivateRoute
                    component={<StagairesList  />}
                      roles={["Admin", "ResponsableRH"]}
                    />
                  } /
                >
          

          
                
                <Route
                  path="joboffre"
                  element={
                    <PrivateRoute
                      component={<JobOffre />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                >
            
                  <Route index element={<JobOffreList />} />
                  <Route path="add-jobOffer" element={<AddJobOffre />} />
                  <Route path="jobOffer-detail/:id" element={<JobOffreDetail />} />

                </Route>
                <Route
                  path="internshipoffer"
                  element={
                    <PrivateRoute
                      component={<InternshipOff />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                >
                  <Route index element={<InternshipOffList />} />
                  <Route path="add-InternshipOff" element={<AddInternOff />} />
                  <Route path="internOffre-detail/:id" element={<InternOffDetail />} />

                </Route>
                <Route
                  path="demandes"
                  element={
                    <PrivateRoute
                      component={<Demandes />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                >


                  <Route index element={<DemandesList />} />
                  <Route path="add-demande" element={<AddDemande />} />
                  <Route path="demande-detail/:id" element={<DemandeDetails />} />


                </Route>
                <Route
                  path="condidature"
                  element={
                    <PrivateRoute
                      component={<Condiddature />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                />
                <Route path="condition" element={<Condition />} />
              </Route>
            ) : (
              <Route path="/" element={<Auth />}>
                <Route path="contact" element={<Contact />} />

                <Route path="home" element={<Home />} />

                <Route path="forget-password" element={<ForgetPassword />} />
                <Route
                  index
                  element={<LoginTest setUpdate={setUpdate} update={update} />}
                />
              </Route>
            )}
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
};
export default Router;
