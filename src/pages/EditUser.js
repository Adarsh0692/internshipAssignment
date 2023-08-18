import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  //fetching perticuler user Deatils by id
  const fetchuserdata = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/users/` + id);

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    
    // updating user data by put method
    axios.put("http://localhost:8080/users/" + id, user).then((res) => {
      alert("data updated successfully!");
      navigate("/");
    });
  }
  return (
    <div className="main">
      <Link to="/">Back to Home page</Link>

      <form className="form" onSubmit={handleSubmit}>
        <h1>Edit User</h1>
        <input
          name="name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />

        <input
          name="username"
          value={user.username}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />

        <input
          name="email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />

        <input
          name="phone"
          value={user.phone}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />

        <input
          name="website"
          value={user.website}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
