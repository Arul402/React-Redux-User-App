import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { addStudent } from '../slices/studentSlices';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        rollnumber:"",
        department:"",
        degree:"",
        college:"",
        address:""
    });
    const dispatch =useDispatch();
    const navigate=useNavigate();

    function handleChange(e) {
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        toast.success("Student Added !");
        dispatch(addStudent(formData));
        setTimeout(()=>{
            navigate("/students")
        },3000)
    }

  return (
     <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        Add New Student Info
      </h2>
      {/*  Here Used Controlled Form beacuse i have seted the value for the state (i.e formData)  */}
      <form onSubmit={handleSubmit} className="space-y-5"> 
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Roll Number</label>
          <input
            type="text"
            name="rollnumber"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.rollnumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Department</label>
          <input
            type="text"
            name="department"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Degree</label>
          <input
            type="text"
            name="degree"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">College</label>
          <input
            type="text"
            name="college"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            rows="3"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddStudent