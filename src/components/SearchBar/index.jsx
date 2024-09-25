import { useState } from "react";
import "./index.scss";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const handleOnChange = (e) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={term} onChange={handleOnChange} placeholder="Search Movies...." />
      <button type="submit">Submit</button>
    </form>
  );
};
export default SearchBar;
