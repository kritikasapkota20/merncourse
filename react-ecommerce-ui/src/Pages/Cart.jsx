import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { authcontext } from '../App';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Chip } from '@mui/material';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Cart() {
 const {cart,setcart}=useContext(authcontext)
 const handledelete=(id)=>{
  if(confirmdelete){
const newcartitems=cart.filter((product)=>!(product._id===id));
setcart(newcartitems);
 }
 }
 const handledecrement=(index)=>{
cart[index].quantity--;
if(cart[index].quantity===0){
  const confirmdel=window.confirm("Quantity is zero. Do you want to remove this item?");
  if(confirmdel){
  handledelete(cart[index]._id);
  }else{
    cart[index].quantity=1;
  }
  return ;
}
setcart([...cart])
 }
 const handleincrement=(index)=>{
  cart[index].quantity++;
  
  setcart([...cart])
   }
   const total=cart.reduce((acc,curr)=>{
    return acc + (curr.quantity*curr.price)
   },0)
  return (
      
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List >
              {cart.map((product,index)=>{
                return ( <ListItem key={product._id}
                  secondaryAction={
                    <>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{
                      handledecrement(index)
                    }}>
                      <RemoveCircleIcon/>
                    </IconButton>
                    <Chip sx={{ml:1}}label={product.quantity}/>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{
                   handleincrement(index)
                    }}>
                      <AddCircleIcon/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{
                      handledelete(product._id)
                    }}>
                      <DeleteIcon />
                    </IconButton>
                    </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={product.image} alt={product.name}/>
                  { console.log(product.image)}
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={`Rs ${product.price}`}
                  />
                </ListItem>)
              })}
              <Typography sx={{ml:2}}><b>Total :</b>Rs {total}</Typography>
            </List>
          </Demo>
        </Grid>
   
  );
}
