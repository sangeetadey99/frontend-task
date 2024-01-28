import React, { useState } from "react";
import group2 from "../assets/Group 2.png";

import { MdInsertChart } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { SiGoogledocs } from "react-icons/si";
import { FaRegBell } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { RiSettings3Fill } from "react-icons/ri";
import { PiPuzzlePieceFill } from "react-icons/pi";

import displayProfile from "../assets/icon/Mask Group.png";

import { RxHamburgerMenu } from "react-icons/rx";

import { MdOutlineFileUpload } from "react-icons/md";
import excel from "../assets/icon/excel.png";
import * as XLSX from "xlsx";

import { IoMdClose } from "react-icons/io";

function UploadCSV() {
  let sideBar = [
    { name: "Dashboard", link: "/", logo: <BiSolidDashboard /> },
    { name: "Upload", link: "/UploadCSV", logo: <MdInsertChart /> },
    { name: "Invoice", link: "/invoice", logo: <PiPuzzlePieceFill /> },
    { name: "Schedule", link: "/schedule", logo: <SiGoogledocs /> },
    { name: "Calendar", link: "/calender", logo: <MdOutlineCalendarMonth /> },
    { name: "Notification", link: "/notification", logo: <GoBellFill /> },
    { name: "Settings", link: "/settings", logo: <RiSettings3Fill /> },
  ];

  const [file, setFile] = useState(null);
  const [excelData, setExcelData] = useState([]);
  let [active, setActive] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          setExcelData(parsedData);
          setFile(null); // Reset file state after upload
        } catch (error) {
          console.error("Error parsing Excel file:", error);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.log("No file selected.");
    }
  };

  const removeFile = () => {
    setFile(null);
    setExcelData([]);
  };
  return (
    <div className="h-screen w-screen flex font-nunito overflow-auto relative">
      <div
        className={` sm:bg-white bg-white w-[100%] h-[100vh] sm:h-[100vh] sm:w-[16%] absolute sm:relative ${
          active ? "w-[100%]" : "w-[0%]"
        }`}
      >
        <div className="flex items-center justify-center h-[17%] sm:gap-3 gap-2 font-medium relative right-24 sm:left-[-20px]">
          <img
            className="lg:h-10 sm:h-8 sm:w-8 lg:w-10 h-6 w-6"
            src={group2}
            alt=""
          />
          <h1 className="sm:text-2xl text-base font-medium">Base</h1>
          <IoMdClose
            className="sm:hidden relative left-48"
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>

        <div className={`${active ? "overflow-visible" : "overflow-hidden"}`}>
          <ul className="flex flex-col gap-2 sm:gap-3 text-sm">
            {sideBar.map(({ name, link, logo }) => {
              return (
                <li
                  className="flex items-center pl-5  gap-3 pt-3 sm:hover:text-blue-500 text-gray-600"
                  key={name}
                >
                  <div>{logo}</div>
                  <a href={link}>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 sm:w-[84%] w-[500px]">
        <div className=" sm:w-[84vw] h-[17%] flex items-center justify-between px-6 m-auto">
          <RxHamburgerMenu
            className="sm:hidden"
            onClick={() => {
              setActive(!active);
            }}
          />
          <div
            className={`flex items-center justify-center h-[17%] sm:hidden sm:gap-3 gap-2 font-medium relative right-12 ${
              active ? "hidden" : "block"
            } `}
          >
            <img
              className="lg:h-10 sm:h-8 sm:w-8 lg:w-10 h-6 w-6"
              src={group2}
              alt=""
            />
            <h1 className="sm:text-2xl text-base font-medium">Base</h1>
          </div>
          <h1 className="text-2xl font-semibold sm:block hidden">Upload CSV</h1>
          <div className="flex items-center gap-4">
            <FaRegBell className="text-xl" />

            <img
              className="sm:h-7 sm:w-7 h-5 w-5"
              src={displayProfile}
              alt=""
            />
          </div>
        </div>

        <div className="sm:h-[40%] sm:w-[84vw]  flex sm:pt-14 justify-center">
          <div className="flex flex-col items-center bg-white sm:h-[300px] sm:w-[550px] rounded-lg px-3 py-4 mt-5 ">
            <div className="border-dashed border-2 border-gray-300 rounded-lg  flex flex-col items-center justify-center sm:h-[200px] sm:w-[500px] h-[200px] w-[280px] ">
              {file ? (
                <div className="flex items-center space-x-2 flex-col">
                  <img
                    src={excel}
                    alt="Excel File"
                    className="sm:w-10 sm:h-10 w-8 h-8 \"
                  />
                  <span className="mt-2 sm:text-base text-sm">{file.name}</span>
                  <button
                    onClick={removeFile}
                    className="hover:text-red-400 text-red-600 font-bold py-1 px-2 focus:outline-none mt-1 sm:text-base text-sm"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="excel-file-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <img
                    src={excel}
                    alt="Excel File"
                    className="sm:w-10 sm:h-10 w-8 h-8 mb-2"
                  />

                  <span className="sm:text-base text-sm">
                    Drop your Excel sheet here or
                    <span className="sm:text-base text-sm text-blue-500">
                      {" "}
                      browse
                    </span>{" "}
                  </span>
                </label>
              )}
              <input
                type="file"
                id="excel-file-upload"
                accept=".xls,.xlsx"
                className="hidden"
                onChange={handleFileChange}
                disabled={!!file} // Disable file input if a file has been uploaded
              />
            </div>
            <button
              onClick={handleUpload}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center gap-3 sm:h-[45px] sm:w-[95.5%] h-[40px] w-[280px] mt-3"
              disabled={!file} // Disable upload button if no file has been uploaded
            >
              <MdOutlineFileUpload />
              <h1>Upload</h1>
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-col bg-gray-50 ">
          {excelData.length > 0 && <p className="px-20 text-[64] mt-10">Uploads</p>}
          {excelData.length > 0 && (
            <div className="w-full flex justify-center p-20">
              <table className="table border border-gray-400 w-full">
                  <thead>
                    <tr>
                      {excelData[0].map((cell, index) => (
                        <th
                          key={index}
                          className="border border-gray-400 px-4 py-2"
                        >
                          <p className="flex justify-center">{cell}</p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="mt-5">
                    {excelData.slice(1).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-400 px-4 py-2 "
                          >
                            <p className="flex justify-center">{cell}</p>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadCSV;
