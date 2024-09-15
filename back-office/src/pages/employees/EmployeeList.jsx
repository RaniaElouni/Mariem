import React, { useEffect, useState } from 'react'
import HeaderPage from '../../components/HeaderPage';
import Liste from '../../components/Liste';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GridActionsCellItem, GridDeleteIcon } from '@mui/x-data-grid';
import { MdRemoveRedEye } from 'react-icons/md';

function EmployeeList() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate()
  
    const fetchEmployess = async () => {
      const response = await axios.get("http://localhost:4000/users");
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
              <img
              
                src={params.value}
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
          field: 'role',
          headerName: 'Role',
          width: 150,
          editable: true,
          valueGetter: (params) => params,
        },
     
     
        // {
        //   field: 'actions',
        //   headerName: 'Actions',
        //   type: 'actions',
        //   width: 300,
        //   getActions: (params) => [
        //     <GridActionsCellItem
        //       icon={<GridDeleteIcon />}
        //       // onClick={() => {
        //       //   setSelectId(params.row.id);
        //       //   handleClickOpen();
        //       // }}
        //       label="Delete"
        //     />,
        //     <GridActionsCellItem
        //       icon={<MdRemoveRedEye  style={{ fontSize: '20px' }}/>}
             
        //     //   onClick={() => navigate(`user-detail/${params.row.id}`)}
        //       label="View"
        //     />,
        //   ],
        // },
      ];
    return (
      <div>
        <HeaderPage parent={"Employees"} firstChild={"List"}/>
        <div class="d-flex justify-content-end my-4">
          <button className="btn btn-primary " onClick={() => navigate("add-employee")}>
           Add Employee
          </button>
        </div>
        <Liste rows={rows} columns={columns} />
      </div>
    )
}

export default EmployeeList