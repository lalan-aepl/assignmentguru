/* eslint-disable no-unused-vars */
"use client";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Hero.css";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types";


const Step1Form = ({ onSubmit }) => {
  Step1Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const emailValidation = (e) => {
    setEmail(e.target.value);
    if (validEmail.test(e.target.value)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading to true when form is submitted

      const data = {
        device_number: `Device 13, Current Page URL: ${location.pathname}`,
        name,
        email,
        description: `device_number: Device 13,\n Current Page URL: ${location.pathname}`,
      };
      
      const requiredFields = [
        { field: "Name", value: name },
        { field: "Email", value: email },
        { description: "Description", value: data.description },
      ];

      const emptyFields = requiredFields.filter((field) => !field.value);

      if (emptyFields.length > 0) {
        const fieldNames = emptyFields
          .map((field) => field.field.toLowerCase())
          .join(", ");
        toast.warning(`Please fill the ${fieldNames}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
        return;
      }

      // const sendData = await axios.post(
      //   "https://devicewebserver.el.r.appspot.com/api/geniusTutor/saveFormData",
      //   data
      // );

      // if (sendData.data.success) {
      //   setName("");
      //   setEmail("");
      //   setDescription("");
      //   // toast.success("now complete the form.", {
      //   //   position: toast.POSITION.TOP_RIGHT,
      //   // });
      //   alert("created");
      // } else {
      //   toast.error("Server returned an error.", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      // }
      onSubmit(data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // toast.error("An error occurred. Please try again later.", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      setLoading(false);
      alert("Something went wrong");
    }
  };

  return (
    <div id="form" className="bg-[#fff1e9] p-6 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="cursor-pointer bg-white py-3 px-4 gap-5 text-center rounded-lg"
        style={{ boxShadow: "rgb(234 176 50 / 60%) 0px 8px 34px" }}
      >
        <p>It&apos;s time you sought help from Assignment Guru</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-8 mt-4">
          <div className="input-box">
            <label>Enter Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control Email"
            />
          </div>

          <div className="input-box">
            <label>Enter Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={emailValidation}
              placeholder="Enter Email"
              className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control Email"
            />
            {emailErr && (
              <label className='error-text'>Please enter a valid email!</label>
            )}
          </div>
        </div>

        <div className="w-full pt-6">
          <button
            aria-label="submit button"
            title="Get Free Assistance"
            type="submit"
            className="cursor-pointer bg-green-dark justify-center items-center text-white flex gap-4 rounded-md px-5 w-full py-2 my-3"
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <span className="text-sm font-medium">Next</span>
            )}
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Step1Form;
