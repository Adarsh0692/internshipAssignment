import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

export default function Details() {
  const [user, setUser] = useState(null);
  const params = useParams();

  //fetching user details by id
  const fetchuserdata = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/users/` + params.id);

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  return (
    <div>
      <Link to="/"> back to Home page</Link>
      <h1>User Details: </h1>
      {user ? (
        <>
          <h3>
            Full Name: <span>{user.name},</span>
          </h3>
          <h3>
            Username: <span>{user.username},</span>
          </h3>
          <h3>
            Email: <span>{user.email},</span>
          </h3>
          <h3>
            Phone: <span>{user.phone},</span>
          </h3>
          <h3>
            Website: <span>{user.website},</span>
          </h3>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
}
