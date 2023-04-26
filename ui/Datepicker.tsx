"use client"
import React, { useEffect, useState } from "react";
//@ts-ignore
import Datepicker from 'flowbite-datepicker/Datepicker';

export default function DatePicker() {
  const [value, setValue] = useState();

  const dobHandler = (e:any) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    if(typeof document !== 'undefined') {
    const datepickerEl = document.getElementById("datepickerId");
    // console.log(datepickerEl);
    // new Datepicker(datepickerEl, {});
    }
  }, []);
  // console.log()
  return (
    <div className="App">
      <h1 className="heading">Date picker</h1>
      <div className="relative w-72">
        <input
          monthpicker-autohide
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Select date"
          // onSelect={(e) => console.log(e.target.value)}
          // onClick={(e) => dobHandler(e)}
          // onClick={(e) => console.log(e.target.value)}
          // onChange={(e) => console.log(e)}
          id="datepickerId"
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
