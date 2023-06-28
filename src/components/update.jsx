import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update =()=>{

  const [creatData, setCreatData]= useState({
    maidenName:'',
    phone:'',
    email:'',
    image:'https://robohash.org/hicveldicta.png'
  });
  const {id} = useParams();
  console.log(id)

  useEffect(()=>{

    axios.get('http://localhost:3000/users/'+ id ).then(res=> setCreatData(res.data))
  },[])
  const navigate = useNavigate();
  const handleSubmit=(e)=>{

    e.preventDefault();
    if(creatData.email && creatData.phone && creatData.maidenName){
      axios.put('http://localhost:3000/users/'+ id,creatData).then(
        res=>{console.log(res);
          navigate('/')
        }

        
      )
    }

  }

    return(
        <>
   <div className=" d-flex  container mt-5 ">
    
   <form className="mx-auto   container justify-content-center rounded shadow-lg  p-5  ">
  <div className="form-group my-4">
    <label htmlFor="exampleInputEmail1"></label>
    <input
      type="email"
      className="form-control  border-0  my-2 border-bottom border-info rounded-0"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      value={creatData.email}
      
      onChange={(e)=>setCreatData({...creatData, email:e.target.value })}
    />
   
  </div>
  <div className="form-group my-4  ">
    <label htmlFor="exampleInputPassword1">Name</label>
    <input
      type="text"
      className="form-control border-0 rounded-0 my-2 border-bottom border-info "
      id="exampleInputPassword1"
      placeholder="Name"
      onChange={(e)=>setCreatData({...creatData, maidenName:e.target.value})}
      value={creatData.maidenName}

    />
  </div>
  <div className="form-group my-4 ">
    <label htmlFor="exampleInputPassword1">Phone</label>
    <input
      type="text"
      className="form-control border-0 rounded-0 my-2 border-bottom border-info "
      id="exampleInputPassword1"
      placeholder="Phone Num..."
      onChange={(e)=>setCreatData({ ...creatData, phone:e.target.value })}
      value={creatData.phone}
    />
  </div>
 
  <button type="button" onClick={handleSubmit} className="btn btn-outline-dark  me-2  ">
                          Submit
                        </button>
                        <button onClick={()=>navigate(-1)} type="button" className="btn btn-outline-dark  me-1  ">
                          Back 
                        </button>
</form>
   </div>

        </>
    )
}

export default Update;