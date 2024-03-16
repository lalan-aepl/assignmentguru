"use client";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Hero.css";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import { useLocation } from 'react-router-dom';

// const Step1Form = ({ onSubmit }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false); // New state for loading spinner

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true); // Set loading to true when form is submitted

//       const data = {
//         device_number: "Device 13",
//         name,
//         email,
//       };
//       console.log("send Data:", data);
//       onSubmit(data);

//       const requiredFields = [
//         { field: "Name", value: name },
//         { field: "Email", value: email },
//       ];

//       const emptyFields = requiredFields.filter((field) => !field.value);

//       if (emptyFields.length > 0) {
//         const fieldNames = emptyFields
//           .map((field) => field.field.toLowerCase())
//           .join(", ");
//         toast.warning(`Please fill the ${fieldNames}`, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//         return;
//       }

//       const sendData = await axios.post(
//         "https://devicewebserver.el.r.appspot.com/api/geniusTutor/saveFormData",
//         data
//       );

//       if (sendData.data.success) {
//         setName("");
//         setEmail("");
//         toast.success("on now fill this data.", {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       } else {
//         toast.error("Server returned an error.", {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("An error occurred. Please try again later.", {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } finally {
//       setLoading(false); // Set loading back to false regardless of success or failure
//     }
//     onSubmit(data);
//   };

//   return (
//     <div id="form" className="bg-[#fff1e9] p-6 rounded-lg">
//       <form
//         onSubmit={handleSubmit}
//         className="cursor-pointer bg-white py-3 px-4 gap-5 text-center rounded-lg"
//         // style={{ boxShadow: "rgb(251 255 8 / 34%) 0px 6px 28px" }}
//         style={{ boxShadow: "rgb(234 176 50 / 60%) 0px 8px 34px" }}
//       >
//         <p>It&apos;s time you sought help from Grades Achievers</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-8 mt-4">
//           <div className="input-box">
//             <label>Enter Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter Name"
//               className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control Email"
//             />
//           </div>

//           <div className="input-box">
//             <label>Enter Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Email"
//               className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control Email"
//             />
//           </div>
//         </div>

//         <div className="w-full">
//           <button
//             aria-label="submit button"
//             title="Get Free Assistance"
//             type="submit"
//             // onClick={onSubmitForm}
//             className="cursor-pointer bg-green-dark justify-center items-center text-white flex gap-4 rounded-md px-5 w-full py-2 my-3"
//           >
//             {loading ? (
//               <LoadingSpinner />
//             ) : (
//               <>
//                 <span className="text-sm font-medium">Next</span>
//                 <svg
//                   className="h-5 w-5 rtl:rotate-180"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </>
//             )}
//           </button>
//           <ToastContainer />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Step1Form;

const Step1Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

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
      if (confirm(`This: ${location.pathname}`))
        // console.log("send Data:", data);
        onSubmit(data);
      else return
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
        return;
      }

      const sendData = await axios.post(
        "https://devicewebserver.el.r.appspot.com/api/geniusTutor/saveFormData",
        data
      );

      if (sendData.data.success) {
        setName("");
        setEmail("");
        setDescription("");
        // toast.success("now complete the form.", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        alert("created");
      } else {
        toast.error("Server returned an error.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // toast.error("An error occurred. Please try again later.", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      alert("Something went wrong");
    } finally {
      setLoading(false);
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control Email"
            />
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
