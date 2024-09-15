import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Chip from '@mui/joy/Chip';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Box from '@mui/material/Box'; 
import LinearProgress from '@mui/material/LinearProgress';
import Liste from '../../../components/Liste'; 
import { GridActionsCellItem, GridDeleteIcon } from '@mui/x-data-grid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HeaderPage from '../../../components/HeaderPage';
export default function InternOffDetail() {
  const [offer, setOffer] = useState({});
  const [rows, setRows] = useState([]);
  const { id } = useParams();
const navigate = useNavigate()


 



    const fetchOffer = async () => {
      const resp = await axios.get(`http://localhost:4000/job-offers/${id}`);
      setOffer(resp.data);
  
      const demandedSkills = resp.data.offerSkills.map(skill => skill.Skills.name);
  
      const updatedRows = resp.data.demande.map(demande => {
        const matchedSkills = demande.matchedSkills || [];
        const score = (matchedSkills.length / demandedSkills.length) * 100; 
  
        return {
          ...demande,
          score,
          matchedSkills, 
        };
      });
  
      const sortedRows = updatedRows.sort((a, b) => b.score - a.score);
  
      setRows(sortedRows || []);
    };
  
    useEffect(() => {
      fetchOffer();
    }, [id]);

  useEffect(() => {
    fetchOffer();
  }, [id]);

  const columns = [

    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      valueGetter: (value,row) =>row?.name

    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
      editable: true,
      valueGetter: (value,row)=>row?.lastName
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
      width: 150,
      editable: true,
      valueGetter: (value, row) => row?.phoneNumber
    },
    {
      field: "adress",
      headerName: "Adress",
      width: 150,
      editable: true,
      valueGetter: (value, row) => row?.adress

    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
      editable: true,
      valueGetter: (value,row)=>row?.email
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      editable: true,
      
      renderCell:(value,row)=>(
        // <p className='' style={{margin:"10px",color:"white", background:value.row.status === "pending" ? "yellow" : value.row.status === "accepted" ? "green" : "red"}}>{value?.row.status}</p>
        <Chip
        variant="filled"
        color="primary"
        size="sm"
        sx={{ pointerEvents: 'none', padding: "10px",background:value.row.status === "pending" ? "#ffc107" : value.row.status === "accepted" ? "green" : "red", color: "white" ,marginLeft:"10px",width:"100px"}}
      
      >
     {value?.row.status}
      </Chip>
      )
    },
    {
      field: "cv",
      headerName: "Cv",
      sortable: false,
      width: 150,
      // valueGetter: (value, row) => row?.cv,
      renderCell: (value,row) => (
        
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
      width: 250,
      editable: true,
      renderCell:(value,row)=>(  
      value?.row.matchedSkills?.map((skill) => (
        <Chip
        variant="filled"
        color="primary"
        size="sm"
        sx={{ pointerEvents: 'none', padding: "10px", backgroundColor: "#1976d2", color: "white" ,marginLeft:"10px",width:"100px"}}
      
      >
      {skill}
      </Chip>
      ))
  )
    },
    {
      field: "score",
      headerName: "Score",
      width: 150,
      editable: true,
      // valueGetter: (value,row)=>row?.score
      renderCell:(value,row)=>(
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
        onClick={() => navigate(`/demandes/demande-detail/${params.row.id}`, { state: { row: params.row } })}
        />
      ],
    },
  ];
  return (
    <div>
    <HeaderPage parent={"Internship Offers"} firstChild={"Details"}/>

    <Card orientation="horizontal" variant="outlined" className="mb-2">
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
          padding: "10px"
        }}
      >
        {offer?.services?.title}
      </CardOverflow>
      <CardContent className="p-5 d-flex gap-5">
        <Typography level="title-lg" id="card-description">
          {offer.title}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            {offer.description}
          </Link>
        </Typography>
        <div className='d-flex gap-4'>
          {offer?.offerSkills?.map((elem, i) => (
            <Chip
              variant="filled"
              color="primary"
              size="md"
              sx={{ pointerEvents: 'none', padding: "15px", backgroundColor: "#e3effb", color: "#12467b" }}
              key={i}
            >
              {elem.Skills.name}
            </Chip>
          ))}
        </div>
      </CardContent>
    </Card>
    <HeaderPage parent={"Demandes"} firstChild={"List"}/>

    <Liste rows={rows} columns={columns} /> {/* Pass rows and columns correctly */}
  </div>
  )
}
