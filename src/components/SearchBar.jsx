import { Button, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="mb-6 flex flex-col gap-5">
      <TextField
        fullWidth
        label="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
