import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { Input } from "antd";

import { filterUser } from "../../appRedux/action/filterActions";

const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const delayedQuery = useCallback(
    _.debounce((e) => dispatch(filterUser(e)), 800),
    []
  );
  const handleSearchChange = (e) => {
    delayedQuery(e.target.value);
  };
  return (
    <>
      <Search
        placeholder="input search text"
        size="large"
        onChange={(e) => handleSearchChange(e)}
      />
    </>
  );
};
export default SearchInput;
