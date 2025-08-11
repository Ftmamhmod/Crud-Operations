import { useStudents } from "../../context/StudentsContext";
import { GoPencil } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";

export default function StudentsList() {
  const { students, deleteStudent } = useStudents();

  return (
    <div>
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