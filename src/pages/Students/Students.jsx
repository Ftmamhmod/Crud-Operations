import { useStudents } from "../../context/StudentsContext";
import { GoPencil } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import userImg from "./../../assets/images/user-img.png";

export default function StudentsList({ handleAddStudent }) {
  const { students, deleteStudent } = useStudents();
  const data = [
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: 7305477760,
      enrollNumber: 1234567305477760,
      dete: "08-Dec, 2021",
    },
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: 7305477760,
      enrollNumber: 1234567305477760,
      dete: "08-Dec, 2021",
    },
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: 7305477760,
      enrollNumber: 1234567305477760,
      dete: "08-Dec, 2021",
    },
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: 7305477760,
      enrollNumber: 1234567305477760,
      dete: "08-Dec, 2021",
    },
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: 7305477760,
      enrollNumber: 1234567305477760,
      dete: "08-Dec, 2021",
    },
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: 7305477760,
      enrollNumber: 1234567305477760,
      dete: "08-Dec, 2021",
    },
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: 7305477760,
      enrollNumber: 1234567305477760,
      dete: "08-Dec, 2021",
    },
  ];
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row h-auto sm:h-15 w-11/12 m-auto  sm:items-center justify-between pt-2">
          <h1 className="sm:text-[22px] font-[700] mb-3">Students List</h1>
          <button
            onClick={handleAddStudent}
            className="bg-[#FEAF00] h-10 sm:h-full w-1/2  sm:w-[199px] rounded-xl text-white text-sm sm:text-base"
          >
            ADD NEW STUDENT
          </button>
        </div>

        <div className="mt-5 m-auto w-11/12 h-0.5 bg-[#d8d7d7]"></div>

        <div className="hidden sm:block mt-4 overflow-x-auto ">
          <table className="min-w-[700px] w-11/12 m-auto border-separate border-spacing-y-4">
            <thead className="text-[12px] text-[#ACACAC]">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Enroll Number</th>
                <th>Date of admission</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr
                  className="h-18 text-center bg-white rounded-2xl shadow"
                  key={student.id}
                >
                  <td className="rounded-l-2xl">
                    <img
                      src={student.amg}
                      alt="#"
                      className="rounded-2xl size-12 ml-3"
                    />
                  </td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phon}</td>
                  <td>{student.enrollNumber}</td>
                  <td>{student.dete}</td>
                  <td className="rounded-r-2xl">
                    <div className="flex justify-center text-[20px] text-[#FEAF00]">
                      <button className="mr-5">
                        <GoPencil />
                      </button>
                      <button onClick={() => deleteStudent(student.id)}>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden mt-4 space-y-4 w-11/12 m-auto">
          {data.map((student) => (
            <div key={student.id} className="bg-white rounded-2xl p-4 shadow ">
              <div className="flex items-center space-x-4">
                <img
                  src={student.amg}
                  alt="#"
                  className="rounded-xl w-12 h-12"
                />
                <div>
                  <h2 className="font-bold text-lg">{student.name}</h2>
                  <p className="text-sm text-gray-500">{student.email}</p>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Phone:</span> {student.phon}
                </p>
                <p>
                  <span className="font-semibold">Enroll Number:</span>{" "}
                  {student.enrollNumber}
                </p>
                <p>
                  <span className="font-semibold">Date of Admission:</span>{" "}
                  {student.dete}
                </p>
              </div>
              <div className="flex justify-end mt-3 text-[#FEAF00] text-lg">
                <button className="mr-4">
                  <GoPencil />
                </button>
                <button>
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="mt-5 p-5 font-bold">Students List</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="w-16 px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Number
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="w-16 px-6 py-4 whitespace-nowrap dark:text-white"
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-25 h-15 rounded-full object-cover"
                />
              </th>
              <td className="px-5 py-4">{student.name}</td>
              <td className="px-5 py-4">{student.email}</td>
              <td className="px-5 py-4">{student.phone}</td>
              <td className="px-5 py-4">{student.enrollNumber}</td>
              <td className="px-5 py-4">{student.date}</td>
              <td className="px-5 py-4">
                <div className="flex justify-center text-[20px] text-[#FEAF00]">
                  <button
                    className="mr-5"
                    onClick={() => console.log(student.id)}
                  >
                    <GoPencil />
                  </button>

                  <button onClick={() => deleteStudent(student.id)}>
                    <MdOutlineDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
