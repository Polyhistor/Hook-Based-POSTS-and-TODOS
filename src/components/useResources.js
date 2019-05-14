import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  //initializing the hook
  const [resources, setResource] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    // axios always have it's property called data, this is where you get everything my child
    setResource(response.data);
  };

  // we are doing useEffect to make use of lifecycle methods
  useEffect(() => {
    // this is just like our componentdidUpdate
    fetchResource(resource);
    // and the [resource] is just our componentDidMount, it runs only once
    // some gotchas: if you want this UseEffect to run every single time your component rerender, don't pass any array,
    // if you want to make sure that the useEffect only run one time, put in an empty array, if you want to add some check
    // to limitate how often the function should be called just pass in some values, based on value changes, the function
    // will be called! cool, isn't it ?
  }, [resource]);
  // returning the current state
  return resources;
};

export default useResources;
