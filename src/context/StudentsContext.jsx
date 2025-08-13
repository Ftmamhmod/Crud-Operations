import { createContext, useContext, useState, useEffect } from "react";

const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  }); 

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (data) => {
    const newStudent = {
      id: crypto.randomUUID(),
      img: data.file?.[0] ? URL.createObjectURL(data.file[0]) : "",
      name: data.name,
      email: data.email,
      phone: data.phone,
      enrollNumber: Math.floor(Math.random() * 1000000000),
      date: data.date?.toLocaleDateString("en-GB"),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentsContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentsContext);
}


