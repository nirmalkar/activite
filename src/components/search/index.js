import React from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";

import { filterUser } from "../../appRedux/action/filterActions";

const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    dispatch(filterUser(e.target.value));
  };
  return (
    <>
      <Search
        placeholder="input search text"
        onChange={(e) => handleSearchChange(e)}
        style={{ width: 300 }}
      />
    </>
  );
};
export default SearchInput;
