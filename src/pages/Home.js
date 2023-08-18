import React, { useEffect, useState } from "react";
import UserList from "../components/userList/UserList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //fetch user
  const fetchuserdata = () => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  return (
    <div>
      <h1 className="h1">User Management Application</h1>
      <button onClick={() => navigate(`/create`)} className="addBtn">
        Add User
      </button>
      {users.length > 0 ? <UserList users={users} /> : <Loader />}  // getting user list here
    </div>
  );
}
