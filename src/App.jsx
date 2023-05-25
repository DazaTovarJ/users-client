import React from "react";
import {Route, Routes} from "react-router-dom";

import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import UserForm from "./pages/UserForm";
import Base from "./pages/Base";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Users />} />
        <Route path="/new" element={<UserForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
