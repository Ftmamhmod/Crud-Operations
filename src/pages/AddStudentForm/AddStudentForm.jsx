import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStudents } from "../../context/StudentsContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddStudentForm() {
  const location = useLocation();
  const student = location.state?.student || {};
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: student.name || "",
      email: student.email || "",
      phone: student.phone || "",
      date: null,
      file: null,
    },
  });
  const { addStudent, editStudent } = useStudents();

  const onSubmit = (data) => {
    if (student) {
      editStudent(student.id, data);
    } else {
      addStudent(data);
    }
    reset();
  };
  const navigate = useNavigate();

  return (
    <div className="h-auto m-auto pt-2 p-5  mt-5 font-bold">
      <h2 className="text-[22px] font-bold mb-6">Add Student</h2>

      <div className="w-8/12 m-auto bg-gray-100 p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              {...register("email", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="01117078066"
              {...register("phone", {
                required: true,
                pattern: /^01[0-2,5]{1}[0-9]{8}$/,
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">
              Date of admission
            </label>
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Pick a date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              )}
            />
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Add Photo</label>
            <input
              type="file"
              {...register("file", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <button
            type="submit"
            onClick={() => navigate("/dashboard/Students")}
            className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-6 px-1 rounded-lg w-full"
          >
            Insert
          </button>
        </form>
      </div>
    </div>
  );
}
