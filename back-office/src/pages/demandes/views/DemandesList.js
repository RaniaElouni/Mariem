
import HeaderPage from '../../../components/HeaderPage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Liste from '../../../components/Liste';
import { GridActionsCellItem, GridDeleteIcon } from '@mui/x-data-grid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function DemandesList() {
  const navigate = useNavigate();
  const [demandes, setDemandes] = useState({});
  const [rows, setRows] = useState([]);
  // const { id } = useParams();







  const fetchDemandes = async () => {
    try {
      const resp = await axios.get("http://localhost:4000/demande");
      const demandes = resp.data;

      const updatedRows = demandes.map(demande => {
        const matchedSkills = demande.matchedSkills || [];
        const demandedSkills = demande?.Offer?.offerSkills?.map(skill => skill.Skills.name) || [];
        const score = demandedSkills.length > 0 ? (matchedSkills.length / demandedSkills.length) * 100 : 0;

        return {
          ...demande,
          score,
          matchedSkills,
        };
      });

      const sortedRows = updatedRows.sort((a, b) => b.score - a.score);

      setRows(sortedRows);
    } catch (error) {
      console.error('Error fetching demandes:', error);
    }
  };

  useEffect(() => {
    fetchDemandes();
  }, []);



  const columns = [

    {
      field: "offre Title",
      headerName: "Offre Title",
      width: 250,
      editable: true,
      valueGetter: (value, row) => row?.Offer?.title

    },
    {
      field: "name",
      headerName: "Name",
      width: 100,
      editable: true,
      valueGetter: (value, row) => row?.name

    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 100,
      editable: true,
      valueGetter: (value, row) => row?.lastName
    },
    {
      field: "age",
      headerName: "Age",
      sortable: false,
      width: 20,
      valueGetter: (value, row) => row?.age,

    },
    {
      field: "phoneNumber",
      headerName: "PhoneNumber",
      type: "number",
      width: 120,
      editable: true,
      valueGetter: (value, row) => row?.phoneNumber
    },
    {
      field: "adress",
      headerName: "Adress",
      width: 100,
      editable: true,
      valueGetter: (value, row) => row?.adress

    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
      editable: true,
      valueGetter: (value, row) => row?.email
    },
    {
      field: "cv",
      headerName: "Cv",
      sortable: false,
      width: 150,
      // valueGetter: (value, row) => row?.cv,
      renderCell: (value, row) => (

        <iframe src={value?.row.cv}
          width="100%"
          height="100%"
          style={{ marginRight: 16 }}></iframe>
        // <Button
        //   variant="contained"
        //   size="small"
        //   style={{ marginLeft: 16 }}
        //   tabIndex={params.hasFocus ? 0 : -1}
        // >
        //   Open
        // </Button>

      ),

    },
    {
      field: "matched skills",
      headerName: "Matched skills",
      width: 200,
      editable: true,
      renderCell: (value, row) => (
        value?.row.matchedSkills?.map((skill) => (
          <Chip
            variant="filled"
            color="primary"
            size="sm"
            sx={{ pointerEvents: 'none', padding: "10px", backgroundColor: "#1976d2", color: "white", marginLeft: "10px", width: "100px" }}

          >
            {skill}
          </Chip>
        ))
      )
    },
    {
      field: "score",
      headerName: "Score",
      width: 200,
      editable: true,
      // valueGetter: (value,row)=>row?.score
      renderCell: (value, row) => (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <LinearProgress
            variant="determinate"
            value={value.row.score}
            sx={{ width: '80%', marginRight: 2 }}
          />
          <Typography variant="body2" color="textSecondary">
            {`${Math.round(value.row.score)}%`}
          </Typography>
        </Box>
      )
    },

    {

      field: 'actions',
      headerName: 'Action',
      type: 'actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
        icon={<GridDeleteIcon/>}
        // onClick={() =>{
        //   setSelectId(params.row.id)
        //   handleClickOpen ()}}
        />
        ,
        <GridActionsCellItem 
        icon={<RemoveRedEyeIcon />}
        onClick={() => navigate(`demande-detail/${params.row.id}`, { state: { row: params.row } })}
        />
      ],
    },
  ];

  return (
    <div>
      <HeaderPage parent={"Demandes"} firstChild={"List"} />
      <div class="d-flex justify-content-end my-4">
        <button className="btn btn-primary " onClick={() => navigate("add-demande")}>
          Add Demande
        </button>
      </div>
      <Liste rows={rows} columns={columns} />
    </div>
  )
}
