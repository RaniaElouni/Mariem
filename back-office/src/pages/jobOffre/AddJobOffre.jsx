import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function AddJobOffre() {
  const [validated, setValidated] = useState(false);
  const [jobOffre, setJobOffre] = useState({
    title: "",
    description: "",
    type: "offre d'emploi",
  });
  const navigate = useNavigate
  const handleChange = (e) => {
    setJobOffre({ ...jobOffre, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const response = await axios.post(
      "http://localhost:4000/job-offers",
      jobOffre
    );

    setValidated(true);
  };

  return (
    // <Form noValidate validated={validated} onSubmit={handleSubmit}>
    //   <Row className="mb-3">
    //     <Form.Group as={Col} md="4" controlId="validationCustom01">
    //       <Form.Label>Title</Form.Label>
    //       <Form.Control
    //         required
    //         type="text"
    //         placeholder="Title"
    //         name="title"
    //         onChange={handleChange}
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //   </Row>
    //   <Row>
    //     <Form.Group as={Col} md="4" controlId="validationCustom02">
    //       <Form.Label>Desciption</Form.Label>
    //       <Form.Control
    //         required
    //         type="text"
    //         placeholder="Desciption"
    //         name="description"
    //         onChange={handleChange}
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //   </Row>
    //   <Row>
    //     <Form.Group as={Col} md="4" controlId="validationCustom02">
    //       <Form.Label>Type</Form.Label>
    //       <Form.Control
    //         required
    //         type="Number"
    //         placeholder="Ty"
    //         name="description"
    //         onChange={handleChange}
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //   </Row>


    //   <Button type="submit">Submit form</Button>
    // </Form>
<div
      style={{backgroundColor: '#daeaf099'}}
      >

    <Form
      noValidate
      validated={validated}
      className="mb-3 card  p-5 m-5 "
      onSubmit={handleSubmit}
      
    >
      <Row style={{ padding: 0 }}>

        <Form.Group
          className="mb-3  col-lg-12 mt-2"
          controlId="formBasicNameAr"
          
        >
          <Form.Label>Title</Form.Label>
          <Form.Control
          
            required
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill this field
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          className="mb-3 col-lg-12 mt-2"
          controlId="formBasicNameFr"
        >
          <Form.Label className="text-center">
            Description
          </Form.Label>

          <Form.Control
            type="nameFr"
            required
            placeholder="Description "
            className=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Please fill this field
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group
          controlId="kindOfStand "
          className="d-flex flex-column  col-lg-12 mt-2"
        >
          <Form.Label>Type</Form.Label>
          <div className="d-flex  gap-5">
            <Form.Check
              value="Job Offer"
              type="radio"
              aria-label="radio 1"
              label="Job Offer"
            // onChange={handleChange}
            // checked={kindOfStand === "design"}
            />
            <Form.Check
              value="Internship"
              type="radio"
              aria-label="radio 2"
              label="Internship"
            // onChange={handleChange}
            // checked={kindOfStand === "male"}
            />
          </div>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Please fill this field
          </Form.Control.Feedback>
        </Form.Group>


      </Row>


      <Row>
        <Form.Group
          className="mb-3  col-lg-12 mt-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Department</Form.Label>
          <select
            class="form-select "
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            required
          >
            {/* <option value="">إختر الولاية </option>
                {tunisiaGovernorates.map((governorate, index) => (
                  <option key={index} value={governorate}>
                    {governorate}
                  </option> */}
            <option value="">Choose the Department</option>

            <option>
              aloo
            </option>

          </select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Please fill this field
          </Form.Control.Feedback>
        </Form.Group>


      </Row>
      <Row>
        <Form.Group
          className="mb-3  col-lg-12 mt-2"
          controlId="formBasicPassword"
        >
          <Form.Label>Demanded Skills</Form.Label>
          <select
            class="form-select "
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            required
          >
            {/* <option value="">إختر الولاية </option>
                {tunisiaGovernorates.map((governorate, index) => (
                  <option key={index} value={governorate}>
                    {governorate}
                  </option> */}
            <option value="">Choose the Demanded skills</option>

            <option>
              aloo
            </option>

          </select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          <Form.Control.Feedback type="invalid">
            Please fill this field
          </Form.Control.Feedback>
        </Form.Group>


      </Row>

      <div className="d-grid mt-4">
        <Button
          variant="primary"
          type="submit"
        // onSubmit={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </Form>
    </div>
  );
}
