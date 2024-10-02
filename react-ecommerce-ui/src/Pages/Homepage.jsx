import * as React from "react";

import Bannerimg from "../assets/banners.jpg";
// import Products from "../components/Products";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import {useQuery} from "@tanstack/react-query"
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Fandl from "../components/fandl"
function Homepage(){
  return (
    <>
      <img src={Bannerimg} width="100%" />
      <Fandl forl="featured" title="Featured Product" querykey={"featured-product"}/>
      <Fandl forl="latest" title="Latest Product" querykey={"latest-product"}/>

      
    </>
  );
}
export default Homepage;
