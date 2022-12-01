import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const ProductComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });
  const clickHandler = () => {
    // Send  data in this part line to the server!
    console.log(comment);
    if (comment.name && comment.email && comment.message) {
      // because of the limitation in API ;we do not have that option to send a comment

      // axios.post("https://fakestoreapi.com/products/ *post*", {
      //   body: {
      //     ...comment,
      //   },
      // }). then(response=>{
      toast.success("Comment sent successfully !", { position: "top-center" });
      setTimeout(() => {
        setComment({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
      // })
    } else {
      toast.error("Invalid data!", { position: "top-center" });
    }
  };
  return (
    <div className="w-full border-l-2 border-primary mx-auto lg:ml-4 p-5 my-6">
      <h1 className="font-bold text-2xl text-primary mb-8">Comments</h1>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <input
            type="text"
            className={`placeholder:text-primary border-2 border-primary p-4 outline-none rounded w-full md:w-[45%] mb-5 md:mb-0 ${
              comment.name &&
              "bg-primary text-white transition duration-1000 ease"
            }`}
            name="name"
            value={comment.name}
            placeholder="Name"
            onChange={(e) =>
              setComment({ ...comment, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            className={`placeholder:text-primary border-2 border-primary p-4 outline-none rounded w-full md:w-[45%] ${
              comment.email &&
              "bg-primary text-white transition duration-1000 ease"
            }`}
            name="email"
            value={comment.email}
            placeholder="email"
            onChange={(e) =>
              setComment({ ...comment, [e.target.name]: e.target.value })
            }
          />
        </div>
        <textarea
          className={`placeholder:text-primary resize-y min-h-[100px] h-[180px]	border-2 border-primary p-4 outline-none rounded ${
            comment.message &&
            "bg-primary text-white transition duration-1000 ease"
          }`}
          name="message"
          placeholder="Enter Your Comment"
          cols="30"
          rows="10"
          value={comment.message}
          onChange={(e) =>
            setComment({ ...comment, [e.target.name]: e.target.value })
          }
        />

        <button
          className={`border-2 border-primary p-4 outline-none rounded mt-5 ${
            comment.message &&
            comment.name &&
            comment.email &&
            "bg-primary text-white transition duration-700 ease"
          }`}
          onClick={clickHandler}
        >
          Send
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductComment;
