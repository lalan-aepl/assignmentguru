"use client";
import { useState, useEffect } from "react";
import axios from "axios";
// import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import { useLocation } from "react-router-dom";

const Step2Form = ({ data }) => {
  const [pages, setPages] = useState(1);
  const [words, setWords] = useState(250);
  const [phone, setPhone] = useState("");
  const [deadline, setDeadline] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fileValue, setFileValue] = useState(null);
  const [defaultDeadline, setDefaultDeadline] = useState("");
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");

    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    setDefaultDeadline(currentDateTime);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // console.log(data.email, data.name, "email,name");
      const formData = {
        device_number: `Device 13, Current Page URL: ${location.pathname}`,
        name: data.name,
        email: data.email,
        phone,
        deadline,
        pages,
        words,
        subject,
        description: `Device Number: Device 13,\n Current Page URL: ${location.pathname},\n ${description}`, // Format description with new lines
        fileValue,
      };

      // console.log("send Data:", formData);
      //   console.log(formData.email, formData.name, "email,name");

      const requiredFields = [
        { field: "Name", value: formData.name },
        { field: "Email", value: formData.email },
        { field: "Phone", value: phone },
        { field: "Deadline", value: deadline },
        { field: "Pages", value: pages },
        { field: "Words", value: words },
        { field: "Subject", value: subject },
        { field: "Description", value: description },
      ];

      const emptyFields = requiredFields.filter((field) => !field.value);

      if (emptyFields.length > 0) {
        const fieldNames = emptyFields
          .map((field) => field.field.toLowerCase())
          .join(", ");
        // toast.warning(`Please fill the ${fieldNames}`, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        alert(`please fill the ${fieldNames}`);
        return;
      }

      const sendData = await axios.post(
        "https://devicewebserver.el.r.appspot.com/api/geniusTutor/saveFormData",
        formData
      );

      if (sendData.data.success) {
        // Reset form fields and show success message
        // toast.success("Successfully submitted.", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        alert("submitted successfully");
        setPhone("");
        setDeadline("");
        setPages(1);
        setWords(250);
        setSubject("");
        setDescription("");
        setFileValue(null);
        // navigate("/success");
      } else {
        // toast.error("Server returned an error.", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        alert("something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // toast.error("An error occurred. Please try again later.", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      alert("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const select = (type) => {
    if (type === "minus" && pages > 1) {
      setPages((prevPage) => prevPage - 1);
    } else if (type === "add") {
      setPages((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    setWords(pages * 250);
  }, [pages]);

  return (
    <div id="form" className="bg-[#fff1e9] p-6 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="cursor-pointer bg-white py-3 px-4 gap-5 text-center rounded-lg"
        style={{ boxShadow: "rgb(234 176 50 / 60%) 0px 8px 34px" }}
      >
        <p>It&apos;s time you sought help from Assignment Guru</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-8 mt-4">
          <div className="flex flex-col gap-2">
            <div className="input-box">
              <label>Enter Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control Email"
              />
            </div>
            <div className="input-box">
              <label>Enter Deadline</label>
              <input
                type="datetime-local"
                name="deadline"
                // value={deadline}
                required
                onChange={(e) => setDeadline(e.target.value)}
                defaultValue={!deadline ? defaultDeadline : undefined}
                className="block px-3 lg:px-5 text-xs xl:text-sm flex-row text-[#2c2c2c] placeholder-slate-700 align-top form-control Email"
              />
            </div>
            <div className="input-box">
              <label>Select Number of words / page</label>
              <div className="pages block px-0 h-auto mb-3 align-top form-control1 Email">
                <div className="page-container">
                  <div className="flex justify-between w-full items-center">
                    <button
                      type="button"
                      aria-label="minus"
                      title="minus"
                      onClick={() => select("minus")}
                      className="text-xl font-bold border-r-[2px] bg-[#f3bb2d] rounded-s text-white border-r-black w-[30px] h-[30px] leading-[inherit] cursor-pointer"
                    >
                      -
                    </button>
                    <p className="xl:text-sm text-xs">
                      {" "}
                      {pages} Page/{words} words
                    </p>
                    <button
                      aria-label="plus"
                      type="button"
                      title="plus"
                      onClick={() => select("add")}
                      className="text-xl w-[30px] h-[30px] leading-[inherit] rounded-e font-bold border-l-[2px] bg-[#f3bb2d] text-white border-l-black cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="input-box">
              <label>Enter Subject / Course Code</label>
              <input
                type="text"
                name="subject"
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject / course code"
                className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control"
              />
            </div>
            <div className="input-box">
              <label>Enter Assignment Description</label>
              <textarea
                name="description"
                type="textarea"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Assignment Description"
                className="block px-3 lg:px-5 text-xs xl:text-sm align-top form-control Email"
              />
            </div>
            <div className="input-box">
              <label>Add File (Optional)</label>
              <input
                type="file"
                name="fileValue"
                // value={fileValue}
                // required
                onChange={(e) => setFileValue(e.target.files[0])}
                placeholder="add file"
                className="block px-3 h-auto lg:px-5 align-top form-control"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <button
            aria-label="submit"
            type="submit"
            className="cursor-pointer bg-green-dark text-white rounded-md px-5 w-full py-2 my-3"
          >
            {loading ? <LoadingSpinner /> : "Get Free Assistance"}
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Step2Form;
