import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import Products from "../components/Products";
// import Pagination from "../components/pagination";
import TablePagination from '@mui/material/TablePagination';
import {useQuery} from "@tanstack/react-query"
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const product = () => {
  
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [order,setorder]=React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage+1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const handleOrderChange=(event)=>{
    setorder(event.target.value)
  }

const {data ,isLoading}=useQuery({
  queryKey:["product",
  ,{order,page,rowsPerPage}],
  queryFn:async()=>{
   try{ const res=await axios.get("http://localhost:4001/products"
      ,{
      params:{
        order,
        page,
        limit:rowsPerPage
      }

    }
  )
  // console.log(res.data.data)
  return res.data.data


}catch(error){
  console.log(error);
}
return [];

}
})
  return (
    
    <>
     <Box sx={{ maxWidth: 100, mb: 2, }}>
        <FormControl fullWidth >
        <InputLabel id="Sort-by-label" >Sort By</InputLabel>
        
        <Select
        size="small"
          labelId="sort-by-label"
          id="order"
          value={order}
          label="Age"
          onChange={handleOrderChange}
         
        >
          <MenuItem value={""}>None</MenuItem>
          <MenuItem value={"asc"}> Price Low to High</MenuItem>
          <MenuItem value={"desc"}>Price High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
     
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {isLoading?(
            <>
             <Grid size="3">
            <Skeleton height="400px" width="200px" />
          </Grid>
          <Grid size="3">
            <Skeleton height="400px" width="200px" />
          </Grid> <Grid size="3">
            <Skeleton height="400px" width="200px" />
          </Grid>
          <Grid size="3">
            <Skeleton height="400px" width="200px" />
          </Grid>
            </>
          ):(
            <>
            {data.data.map((product)=>{
              return (<Grid key={product._id} size="3">
              <Products product={product}/>
            </Grid>)
            })}
            </>
          )}
        
         
        </Grid> 
        <TablePagination
      component="div"
      count={data?.total??0}
      page={page-1}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[4,8,12]}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
      </Box>
     
    </>
  );
};

export default product;
