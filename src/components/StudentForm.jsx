import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required").min(1, "Age must be positive"),
  grade: Yup.string().required("Grade is required"),
});

const StudentForm = ({ initialValues, onSubmit, editStudentId }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mb-6 bg-white p-5 rounded-lg shadow-xl"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editStudentId ? "Edit Student" : "Add New Student"}
      </h2>
      <div className="flex flex-col gap-5">
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          className="mb-4"
        />

        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          className="mb-4"
        />

        <TextField
          fullWidth
          select
          label="Grade"
          name="grade"
          value={formik.values.grade}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.grade && Boolean(formik.errors.grade)}
          helperText={formik.touched.grade && formik.errors.grade}
          className="mb-4"
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="D">D</MenuItem>
          <MenuItem value="F">F</MenuItem>
        </TextField>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.isActive}
                name="isActive"
                onChange={formik.handleChange}
              />
            }
            label="Active"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="mt-4"
          >
            {editStudentId ? "Update Student" : "Add Student"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
