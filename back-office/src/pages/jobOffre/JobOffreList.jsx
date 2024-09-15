import React, { useEffect, useState } from "react";
import Liste from "../../components/Liste";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HeaderPage from "../../components/HeaderPage";
export default function JobOffreList() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate()

  const fetchOffres = async () => {
    const response = await axios.get("http://localhost:4000/job-offers");
    setRows(response.data.filter((el) => el.type === "offre d'emploi"));
  };

  useEffect(() => {
    fetchOffres();
  }, []);
  const columns = [

    {
      field: "title",
      headerName: "Title",
      width: 300,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 300,
      editable: true,
      valueGetter: (value, row) => row.services.title
    },
    {
      field: "description",
      headerName: "Description",
      sortable: false,
      width: 300,
    },
    {
      field: "demands",
      headerName: "Demands",
      type: "number",
      width: 300,
      editable: true,
      valueGetter: (value, row) => row.demande.length,
    },
    {

      field: 'actions',
      headerName: 'Action',
      type: 'actions',
      width: 300,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
        // onClick={() =>{
        //   setSelectId(params.row.id)
        //   handleClickOpen ()}}
        />
        ,
        <GridActionsCellItem
          icon={<RemoveRedEyeIcon />}
          onClick={() => navigate(`jobOffer-detail/${params.row.id}`)}
        />
      ],
    },
  ];

  return (
    <div>
      <HeaderPage parent={"Job Offers"} firstChild={"List"}/>
      <div class="d-flex justify-content-end my-4">
        <button className="btn btn-primary " onClick={() => navigate("add-jobOffer")}>
         Add Job-Offer
        </button>
      </div>
      <Liste rows={rows} columns={columns} />
    </div>
  )
}
