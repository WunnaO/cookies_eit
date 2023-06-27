import { createContext, useState } from "react";

export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [studentList, setStudentList] = useState([]);
  console.log(studentList);

  const addList = (list) => {
    setStudentList([...studentList, list]);
  };
  const DeleteHandler = (id) => {
    studentList.filter((list) => list.id !== id);
  };
  return (
    <StudentContext.Provider
      value={{ studentList, setStudentList, addList, DeleteHandler }}
    >
      {children}
    </StudentContext.Provider>
  );
};
