import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add user details by post method 
    axios
      .post("http://localhost:8080/users", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <Link to="/">Back to Home page</Link>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Add User</h1>
        <input
          {...register("name", { required: "This field is required!" })}
          placeholder="Enter Full Name"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          {...register("username", { required: "This field is required!" })}
          placeholder="Enter Username"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          {...register("email", { required: "This field is required!" })}
          placeholder="Enter Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("phone", { required: "This field is required!" })}
          placeholder="Enter Phone"
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        <input
          {...register("website", { required: "This field is required!" })}
          placeholder="Enter Website"
        />
        {errors.website && <p>{errors.website.message}</p>}
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
