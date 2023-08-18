import React from "react";
import "./UserList.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserList({ users }) {
  const navigate = useNavigate();

  // delete user
  function handleDelete(id) {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios
        .delete("http://localhost:8080/users/" + id)
        .then((res) => {
          alert("User has deleted successfully!");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="userTable">
      <table>
        <tr className="">
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
       
        {users &&
          users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className="action">
                <button
                  onClick={() => navigate(`/edit/${user.id}`)}
                  className="edit"
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/details/${user.id}`)}
                  className="details"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
