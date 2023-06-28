import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Read =()=>{


    const [data, setData]= useState([]);
   
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
    
        axios.get(`http://localhost:3000/users/${id}`).then(e=> setData(e.data)).catch(w=> console.log(w.err))
        
        
    },[id])

   
    return(
        <>
     <div className="d-flex justify-content-center items-center mt-5">
     <div className="card shadow-lg p-3 rounded bg-dark text-white"  style={{ width: "18rem" }}>
    <h5 className="card-title">{data.maidenName}</h5>
  <img className="card-img-top" src={data.image} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">
      <b>Phone:</b> {data.phone}
    </p>
    <p className="card-text">
      <b>Email:</b> {data.email}
    </p>
    <p className="card-text">
      <b>Age:</b> {data.age}
    </p>
    <Link to={`/update/${id}`}>
    <button type="button" className="btn btn-outline-info me-1 btn-sm ">
                          Edit
                        </button>
    </Link>
                        <button onClick={()=>navigate(-1)} type="button" className="btn btn-outline-warning me-1 btn-sm ">
                          Back
                        </button>
  </div>
</div>

     </div>

        </>
    )
}

export default Read;