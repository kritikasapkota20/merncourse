// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { useState,useEffect } from "react";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// import { useParams } from "react-router-dom";
// import {Link,useNavigate} from "react-router-dom"
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import Alert from '@mui/material/Alert';
// import {
//   useQuery,
//   useMutation,
// } from '@tanstack/react-query'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
// // const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// const schema = yup
// .object()
// .shape({
//   name: yup.string().required("Name is required"),
//   price: yup.number().required("Price is required"),

// })
// .required();
// export default function Productform() {
//   const {productId}=useParams();
  
//   const action=productId?"Edit":"Add"
// // console.log(productId);
//   const navigate=useNavigate();
//   const [selectedfiles,setselectedfiles]=useState(null)
//   const { data: product } = useQuery({
//     queryKey: ["products", { productId }],
//     queryFn: async () => {
//       const res = await axios.get(`/api/products/${productId}`);
//       return res.data.data;
//     },
//     enabled: Boolean(productId),
//   });
//   const mutation=useMutation({
//     mutationFn:async(formData)=>{
//       if(product){
//         // const res=await axios.patch(`/api/products/${productId}`);
//         // return res.data;
//         const res=await axios.patch(`/api/products/${productId}`,formData,{
//           headers:{
//               "Content-Type":"multipart/form-data"
//           }
//         });
//         // console.log(res);
//      return res.data
//       }
      
//       const res=await axios.post("/api/products",formData,{
//         headers:{
//             "Content-Type":"multipart/form-data"
//         }
//       });
//       // console.log(res);
//    return res.data
//     },
//     onSuccess:(data)=>{
//       // console.log(data.message);
// toast.success(data.message);
// setTimeout(() => {
//   navigate("/Dashboard/products");
// }, 1000); 
// // navigate("/sign-in")

//     },
//     onError:(err)=>{
// // console.log(err.response.data.message);
// // toast.error(err.response.data.message)

//     }
    
//   })
//   // console.log(mutation.error)
  
 
//   const { register, handleSubmit,formState:{errors},reset,setValue} = useForm({
//     resolver: yupResolver(schema)
//   });
//   if(product){
//     setValue("name",product.name);
//     setValue("price",product.price)
//   // console.log(product.name)

//   }

// //  console.log(productId)
// // console.log(product)
//   const onSubmit = (data) => {
//     const formData=new FormData();
// formData.append("name",data.name);
// formData.append("price",data.price);
// if(selectedfiles){
//     formData.append("image",selectedfiles);
// }
// // console.log(selectedfiles)
//     // console.log("Form Data:", data);  
//   mutation.mutate(formData);

//   };
  
//   useEffect(()=>{
//     if(mutation.error){
// reset();

//     }
//   },[mutation.error,reset])
//   return (
//     <Stack
//       sx={{ width: "80%", mx: "auto" }}
//       direction="column"
//       justifyContent="space-between"
//     >
//       <Card sx={{ p: 10 }} variant="outlined">
//         <Typography
//           component="h1"
//           variant="h4"
//           sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
//         >
//          {action} Product
//         </Typography>
//         {mutation.error &&<Alert sx={{my:2}} severity="error">
//  {mutation.error.response.data.message} 
//  </Alert>}
        
//         <Box
//           component="form"
//           onSubmit={handleSubmit(onSubmit)}
//           noValidate
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             width: "100%",
//             gap: 2,
//           }}
//         >
//             <FormLabel htmlFor="name"> Product Name</FormLabel>
//             <TextField
//               id="name"
//               type="name"
//               name="name"
//               placeholder="Enter the product name"
//               autoComplete="name"

//               autoFocus
              
//               fullWidth
//               variant="outlined"
//               sx={{ ariaLabel: "name" }}
//               {...register("name")}
             
             
//             />
          
//             <FormLabel htmlFor="price">Price</FormLabel>
//             <TextField
//               id="price"
//               type="number"
//               name="price"
//               placeholder="Enter the price of products"
//               autoComplete="price"
//               autoFocus
//               required
//               fullWidth
//               variant="outlined"
//               {...register("price")}
              
//               sx={{ ariaLabel: "price" }}

//             />
          
//          {/* {!productId&&( <> */}
//          <FormLabel htmlFor="image">Product Image</FormLabel>
//           <input
//             id="image"
//             name="image"
//             type="file"
//             accept="image/*"
//             onChange={(e)=>
//                 setselectedfiles(e.target.files[0])}
//           />
//           {/* </>)}  */}
         
            
//           <Button type="submit" 
            
//            fullWidth variant="contained">
//         {action}  Product
//           </Button>
          
//         </Box>
//       </Card>
//       <ToastContainer />
//     </Stack>
//   );
// }
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import Alert from "@mui/material/Alert";

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().required(),
  })
  .required();

export default function ProductForm() {
  const { productId } = useParams();
  console.log({ productId });
  const navigate = useNavigate();

  const { data: product } = useQuery({
    queryKey: ["products", { productId }],
    queryFn: async () => {
      const res = await axios.get(`/api/products/${productId}`);
      return res.data.data;
    },
    enabled: Boolean(productId),
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("image", data.image[0]);

      if (productId) {
        const res = await axios.patch(`/api/products/${productId}`, formData);
        return res.data;
      }

      const res = await axios.post("/api/products", formData);
      return res.data;
    },
    onSuccess: (data) => {
      navigate("/dashboard/products");
      toast.success(data.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (product) {
    setValue("name", product.name);
    setValue("price", product.price);
  }

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const action = productId ? "Edit" : "Add";

  return (
    <Stack
      sx={{ width: "80%", mx: "auto" }}
      direction="column"
      justifyContent="space-between"
    >
      <Card sx={{ p: 10 }} variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          {action} Product
        </Typography>
        {mutation.error && (
          <Alert sx={{ my: 2 }} severity="error">
            {mutation.error.response.data.message}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="name">Image</FormLabel>
            <input type="file" {...register("image")} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              id="name"
              type="name"
              name="name"
              placeholder="your name"
              autoComplete="name"
              autoFocus
              fullWidth
              variant="outlined"
              error={Boolean(errors?.name?.message)}
              helperText={errors?.name?.message}
              sx={{ ariaLabel: "name" }}
              {...register("name")}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="price">price</FormLabel>
            <TextField
              id="price"
              type="number"
              name="price"
              autoComplete="price"
              autoFocus
              fullWidth
              variant="outlined"
              error={Boolean(errors?.price?.message)}
              helperText={errors?.price?.message}
              sx={{ ariaLabel: "price" }}
              {...register("price")}
            />
          </FormControl>

          <Button type="submit" fullWidth variant="contained">
            {action} Product
          </Button>
        </Box>
      </Card>
    </Stack>
  );
}