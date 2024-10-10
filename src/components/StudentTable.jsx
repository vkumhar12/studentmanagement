import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const StudentTable = ({ students, handleEdit, handleDelete }) => {
  return (
    <TableContainer component={Paper} className="mb-6">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell>{student.isActive ? "Active" : "Inactive"}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(student.id)}
                    className="mr-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
