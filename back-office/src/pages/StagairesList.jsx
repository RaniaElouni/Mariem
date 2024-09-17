import React, { useEffect, useState } from 'react'


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GridActionsCellItem, GridDeleteIcon } from '@mui/x-data-grid';
import { MdRemoveRedEye } from 'react-icons/md';
import { Avatar } from '@mui/material';
import Liste from '../components/Liste';
import HeaderPage from '../components/HeaderPage';

function StagairesList() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate()
  
    const fetchEmployess = async () => {
      const response = await axios.get("http://localhost:4000/stagaires");
      setRows(response.data);
    };
  
    useEffect(() => {
        fetchEmployess();
    }, []);
    const columns = [
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 120,
            renderCell: (params) => (
          console.log(params,"this is params from renderCell"),  <img
              
                src={params.value?params.value:"https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"}    
                onError={(e) => e.target.src = "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"}
                alt="Avatar"
                style={{ width: 50, height: 50,borderRadius:"50%",objectFit:"cover" }}
              />
            ),
          },
        {
          field: 'name',
          headerName: 'Name',
          width: 120,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last Name',
          width: 120,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 250,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 100,
          editable: true,
        },
        {
          field: 'encadrant',
          headerName: 'Encadrant',
          width: 150,
          editable: true,
          valueGetter: (params) => params?.endradrant?.name,
        },
     
      ];
    return (
      <div>
        <HeaderPage parent={"Stagaires"} firstChild={"List"}/>
        <div class="d-flex justify-content-end my-4">
       
        </div>
        <Liste rows={rows} columns={columns} />
      </div>
    )
}

export default StagairesList
