import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import Table from 'react-bootstrap/Table';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Messmenu from './../Messmenu/Messmenu';

const UserMenu = () => {
  const [menuData, setMenuData] = useState([]);

  const Getmenu = () => {
    axios
      .get("/api/v1/auth/getmenu")
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  };

  useEffect(() => {
    Getmenu();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      {/* <div>
        <h2>Weekly Menu</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map((menu) => (
              <tr key={menu.dayOfWeek}>
                <td>{menu.dayOfWeek}</td>
                <td>{menu.breakfast}</td>
                <td>{menu.lunch}</td>
                <td>{menu.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

{/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="center">Day</TableCell>
            <TableCell  align="center">Breakfast</TableCell>
            <TableCell  align="center">Lunch</TableCell>
            <TableCell  align="center">Dinner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuData.map((menu) => (
            <TableRow key={menu.dayOfWeek} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"  align="center">
                {menu.dayOfWeek}
              </TableCell>
              <TableCell align="center">{menu.breakfast}</TableCell>
              <TableCell align="center">{menu.lunch}</TableCell>
              <TableCell align="center">{menu.dinner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}






<div >
      <Table striped responsive bordered hover variant="dark" style={{ marginTop:'50px' ,width:'99.8%', height:'65vh'}}>
      
        <thead>
          <tr style={{ height: '80px', fontSize: '2rem' }}>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {menuData.map((menu) => (
            <tr key={menu.dayOfWeek}>
              <td>{menu.dayOfWeek}</td>
              <td>{menu.breakfast}</td>
              <td>{menu.lunch}</td>
              <td>{menu.dinner}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Layout>
 

 );

};
 

export default UserMenu;
