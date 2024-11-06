import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import { FormControl } from "@mui/material";
import {InputLabel} from "@mui/material";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import { useQuery } from "@tanstack/react-query";
import Chip from "@mui/material/Chip";
import Avatar  from "@mui/material/Avatar";
import React, { useState } from "react"
const STATUS_COLOR = {
  pending: "secondary",
  cancelled: "error",
  completed: "success",
};

// pagination

export default function DashboardProduct() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [search,setsearch]=useState("");


  const handleChangePage = (event, newPage) => {
    setPage(newPage+1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  

  const {data ,isLoading}=useQuery({
    queryKey:["product",
    ,{page,rowsPerPage,search}],
    queryFn:async()=>{
     try{ const res=await axios.get("/api/products"
        ,{
        params:{
          
          page,
          limit:rowsPerPage,
          search
        }
  
      }
    )

    return res.data.data
  }catch(error){
    console.log(error);
  }
  return [];
  
  }
  })

  return (
    <TableContainer component={Paper}>
     <FormControl variant="standard"
      sx={{display:"flex",justifyContent:"flex-end", mb:5}} 
      >
        <InputLabel  htmlFor="input-with-icon-adornment" sx={{my:3,mx:5,fontSize:20}}>
          Search Products
        </InputLabel>
        <Input  onChange={(e)=>{
          setsearch(e.target.value)
        }}
          id="input-with-icon-adornment"
          value={search}
          startAdornment={
            <InputAdornment position="start" sx={{mx:1}}>
              <Search />
            </InputAdornment>
          }
        />
      </FormControl>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >S NO.</TableCell>
            <TableCell >Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton width="100%" height="50px" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton width="100%" height="50px" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton width="100%" height="50px" />
                </TableCell>
              </TableRow>
            </>
          ) : (
            data.data.map(({ _id, image, name,price }, index) => (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <Avatar src={` http://localhost:4001/${image}`} alt={name}/>
                  </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>Rs {price}</TableCell>

              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      count={data?.total??0}
      page={page-1}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[4,8,12]}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>
  );
}