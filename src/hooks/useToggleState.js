import { useState } from "react";

const useToggleState = (initialVal, id) => {
  const [state, setState] = useState(initialVal);
  const onToggle = () => {
    setState(!state);
  };
  return [state, onToggle, id];
};

export default useToggleState;
