import React from "react";
import leftImg from "../assets/Leftside.png";
import grp1 from "../assets/Group 1.png";
import base from "../assets/BASE (1).png";
import social from "../assets/Frame 2.png";
import google from "../assets/Google.png";
import appple from "../assets/Apple.png";
import top1 from "../assets/Component 90.png";
import social1 from "../assets/Group 7568.png";
import { useNavigate } from "react-router-dom";

function SignIn() {

    let navigate =useNavigate()

    let handleSubmit=(e)=>
    {
        e.preventDefault()
        navigate('/UploadCSV')
    }
  return (
    <div className="sm:flex flex-wrap h-screen w-screen">
      <div className="sm:h-screen sm:w-1/2 bg-[#F8FAFF] hidden sm:block">
        <div className="relative">
          <img src={leftImg} className="h-screen w-screen" alt="" />
          <div className="absolute top-6 left-6">
            <img src={grp1} className="h-10 w-10" alt="" />
          </div>
          <div className="absolute top-64 left-48">
            <img src={base} className="h-8 w-28" alt="" />
          </div>
          <div className="absolute bottom-8 left-36">
            <img src={social} className="h-8 w-62" alt="" />
          </div>
        </div>
      </div>

      <div className="sm:hidden flex-col mb-[-30px]">
        <img src={top1} className="w-screen h-16" alt="" />
      </div>

      <div className="sm:h-screen sm:w-1/2 w-screen h-screen flex justify-center items-center bg-[#F8FAFF]">
        <div>
          <h1 className=" font-semibold  sm:text-xl text-lg">Sign In</h1>
          <p className=" font-medium sm:text-[12px] text-[10px]">
            Sign in to your account
          </p>
          <div className="flex gap-3 my-4">
            <button className="bg-white shadow-sm  rounded-lg p-1 sm:text-[13px] text-[10px] px-2 flex gap-1 justify-center items-center">
              <img src={google} alt="" className="w-3" />
              Sign in with Google
            </button>
            <button className="bg-white shadow-sm  rounded-lg p-1 sm:text-[13px] text-[10px] px-2 flex gap-1 justify-center ">
              <img src={appple} alt="" className="w-3" />
              Sign in with apple
            </button>
          </div>
          <div className="bg-white rounded-md  shadow-lg flex justify-center items-center">
            <div className="w-[90%] ">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3   ">
                <div className="flex  flex-col mt-4">
                  <label className="text-[#999999] sm:text-[14px] text-[12px]">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border bg-[#F5F5F5] w-[100%] sm:h-8 h-7 rounded p-1"
                    required
                  />
                </div>
                <div className="flex  flex-col">
                  <label className="text-[#999999] sm:text-[14px] text-[12px]">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border bg-[#F5F5F5] w-[100%] sm:h-8 h-7 rounded p-1"
                    required
                  />
                </div>
                <div className="flex">
                  <h1 className="text-[#346BD4] text-[12px]">
                    Forgot password?
                  </h1>
                </div>
                <div className="flex justify-center w-[100%] items-center">
                  <button className="bg-[#605BFF] text-white text-[14px] w-[100%] mt-1 rounded p-1 font-[600] mb-8" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <span className="text-[13px] flex  justify-center items-center mt-6">
            Don't have an account?{" "}
            <h1 className="text-[#346BD4] text-[12px] px-1"> Register here</h1>
          </span>
          <div className="sm:hidden block">
            <img src={social1} className="h-6 m-auto mt-[20px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
