import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function AddStudentForm() {
  const [startDate, setStartDate] = useState(null);

  return (
    <>
      {/* git checkout studentForm */}
        <div className=" h-auto sm:h-15 w-11/12 m-auto  sm:items-center justify-between pt-2">

                <h2 className="sm:text-[22px] font-[700]  mb-6  h-1">Add new Students </h2>

      <div className=" w-8/12 m-auto bg-gray-100 p-6">

        <form>
          <div class=" mb-3 ">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div class=" mb-3 ">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              phone
            </label>
            <input
              type="tel"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="01117078066"
      pattern="^01[0-2,5][0-9]{8}$"
              required
            />
          </div>

<div className=" mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of admission
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block  p-2.5
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                placeholderText="Pick a date"
            />
          </div>

          {/* Show Selected Date
      {startDate && (
        <p className="text-green-600">
          You selected: <strong>{startDate.toDateString()}</strong>
        </p>
      )} */}

          <div className="mb-3">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
                         ADD Photo

            </label>
            <input
              type="file"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
     className="bg-[#FEAF00] h-10 sm:h-full   rounded-xl text-white text-sm sm:text-base w-full p-3">

            Add User
          </button>
        </form>
      </div>
      </div>
    </>
  );
}
