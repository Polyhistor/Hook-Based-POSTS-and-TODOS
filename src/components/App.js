import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./userList";

const App = () => {
  // our array destructuring down there constsi of two main elements, the first 'resource' contains the presenet state at any time,
  // and the second is the one that updates, it is just like the setState in class components. Finally, useState is the hook and
  // and the 'posts' value given is just the initial state
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
