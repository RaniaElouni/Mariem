import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Heat } from "@alptugidin/react-circular-progress-bar";
import HeaderPage from "../../../components/HeaderPage";
import Chip from "@mui/joy/Chip";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
export default function DemandeDetails() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phoneNumber: "",
  })
  const handleSave = () => {
    // Handle form submission or further processing here
    console.log("Form Data Submitted: ", formData);
    handleClose(); // Close the modal after saving
  };

  const location = useLocation();
  const { row } = location.state || {};
  console.log(row, "row");
  if (!row) {
    return <div>No data available</div>;
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateStatus = async (status) => {
    const body = {
      status: status,
      name: row.name,
      lastName: row.lastName,
      email: row.email,
    };
    console.log(body, "body");
    await axios.patch(
      `http://localhost:4000/demande/updateDem/${row.id}`,
      body
    );
    handleShow();
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card">
      <div className="mx-5">
        <HeaderPage parent={`Demande of ${row.type}`} firstChild={"CV"} />

        <MDBRow>
          <MDBCol lg="12">
            <MDBCard className="mb-4 mt-3">
              <MDBCardBody className="text-center">
                <iframe src={row?.cv} height={500} width={"100%"} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="8" className="mt-2">
            <MDBCard className="mb-4">
              <HeaderPage
                parent="Demande"
                firstChild={"Personel Information"}
              />

              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {row.name} {row.lastName}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Age</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.age}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {row.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {row.phoneNumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {row.adress}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Note</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{row.note}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="12" sm="12" lg="4">
            <HeaderPage parent="Demande" firstChild={"Matched Skills"} />
            {row.matchedSkills.map((elem, i) => (
              <Chip
                key={i}
                variant="filled"
                color="primary"
                size="sm"
                sx={{
                  pointerEvents: "none",
                  padding: "10px",
                  backgroundColor: "#1976d2",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                {elem}
              </Chip>
            ))}
            <Heat
              progress={row.score}
              range={{ from: 0, to: 100 }}
              sign={{ value: "%", position: "end" }}
              showValue={true}
              revertBackground={false}
              text={"Match"}
              sx={{
                barWidth: 5,
                bgColor: "#dadada",
                shape: "half",

                valueSize: 13,
                textSize: 13,
                valueFamily: "Trebuchet MS",
                textFamily: "Trebuchet MS",
                valueWeight: "normal",
                textWeight: "normal",
                textColor: "#000000",
                valueColor: "#000000",
                loadingTime: 1000,
                strokeLinecap: "round",
                valueAnimation: true,
                intersectionEnabled: true,
              }}
            />
          </MDBCol>
        </MDBRow>

        <div className="d-flex mb-5 gap-2  justify-content-start">
          <button
            className="btn btn-success btn-lg "
            onClick={() => {
              updateStatus("accepted");
            }}
          >
            Agree
          </button>
          <button
            className="btn btn-danger btn-lg"
            onClick={() => {
              updateStatus("refused");
            }}
          >
            Refuse
          </button>
        </div>
      </div>
      <Dialog open={show} onClose={handleClose}>
        <DialogTitle>Confirmation </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"    
            label="Name"
            type="text"
            fullWidth
            value= {row.name+" "+row.lastName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value= {row.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="age"
            label="Age"
            type="number"
            fullWidth
            value= {row.age}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            fullWidth
            value={row.phoneNumber}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="password"
            type="tel"  
            fullWidth
            value={""}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="btn btn-danger">
            Cancel
          </Button>
          <Button onClick={handleSave} className="btn btn-success">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
