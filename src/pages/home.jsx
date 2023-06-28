import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="vh-100 overflow-auto  text-center pt-5  ">
        <h1 className="text-info py-2">
          Users Table{" "}
          <Link to={"/create"}>
            <button type="button" className="btn btn-outline-dark  me-1  ">
              Add +
            </button>
          </Link>
        </h1>
        <div className="  py-0 my-0  d-flex flex-wrap justify-content-center   align-items-center">
          <div className="w-100 table-responsive ">
            <table className="table table-info overflow-auto  p-5 border-0 table-hover">
              <thead>
                <tr>
                  <th className="border-0 text-start overflow-auto" scope="row">
                    ID
                  </th>
                  <th className="border-0 text-start overflow-auto" scope="row">
                    Name
                  </th>
                  <th className="border-0 text-start overflow-auto" scope="row">
                    Email
                  </th>
                  <th className="border-0 text-start overflow-auto" scope="row">
                    Phone
                  </th>
                  <th className="border-0 text-start overflow-auto" scope="row">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td className="border-0 text-start overflow-auto">{e.id}</td>
                      <td className="border-0 text-start overflow-auto">{e.maidenName}</td>
                      <td className="border-0 text-start overflow-auto">{e.email}</td>
                      <td className="border-0 text-start overflow-auto">{e.phone}</td>
                      <td className="border-0 text-start overflow-auto">
                        <Link to={`/read/${e.id}`}>
                          <button type="button" className="btn btn-outline-success me-1 btn-sm">
                            View
                          </button>
                        </Link>
                        <button onClick={() => handleDelete(e.id)} type="button" className="btn btn-outline-danger me-1 btn-sm">
                          Delete
                        </button>
                        <Link to={`/update/${e.id}`}>
                          <button type="button" className="btn btn-outline-dark me-1 btn-sm">
                            Edit
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
