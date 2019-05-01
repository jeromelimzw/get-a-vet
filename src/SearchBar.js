import React from "react";
import { Input, Container } from "reactstrap";

const SearchBar = ({ handleSearchBar }) => {
  return (
    <Input
      onChange={handleSearchBar}
      placeholder="Search for a vet ..."
      className="w-50 tc center mv4 fw7"
    />
  );
};

export default SearchBar;
