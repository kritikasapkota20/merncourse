import React  ,{useState,useEffect} from "react";


function Usequery(apiendpoint){
    const [data,setdata]=useState([]);
    const [status,setstatus]=useState("loading")
    const [error,seterror]=useState(null);
    useEffect(()=>{
      const getData=async()=>{
        try{
      const res=  await fetch(apiendpoint)
      const resdata=await res.json();
          setdata(resdata)
        setstatus("success")
        }catch(err){
          seterror(err.message());
          setstatus("error");
        }
      }
     getData()
    
    },[apiendpoint])
    return {data,status,error}
  }
  export default Usequery
  