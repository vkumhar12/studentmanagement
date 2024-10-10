import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [editStudentId, setEditStudentId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const initialValues = {
    name: "",
    age: "",
    grade: "A",
    isActive: true,
  };

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
    setFilteredStudents(students);
  }, [students]);

  const handleSubmit = (values, { resetForm }) => {
    if (editStudentId !== null) {
      const updatedStudents = students.map((student) =>
        student.id === editStudentId
          ? { ...student, ...values, age: Number(values.age) }
          : student
      );
      setStudents(updatedStudents);
      setEditStudentId(null);
    } else {
      const newStudent = {
        ...values,
        id: students.length + 1,
        age: Number(values.age),
      };
      setStudents([...students, newStudent]);
    }

    resetForm();
  };

  const handleEditStudent = (id) => {
    const student = students.find((student) => student.id === id);
    if (student) {
      setEditStudentId(id);
    }
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleSearch = () => {
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStudents(filtered);

    setSearchQuery("");
  };

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  return (
    <div className="p-8 bg-slate-100">
      <h1 className="text-2xl font-bold mb-4">Student Record Management</h1>

      <StudentForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        editStudentId={editStudentId}
      />
      <div className="bg-white p-5 rounded-lg shadow-xl">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />

        <StudentTable
          students={filteredStudents}
          handleEdit={handleEditStudent}
          handleDelete={handleDeleteStudent}
        />
      </div>
    </div>
  );
};

export default App;
