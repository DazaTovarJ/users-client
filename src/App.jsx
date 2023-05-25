import React from "react";
import {Route, Routes} from "react-router-dom";

import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import Base from "./pages/Base";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Users />} />
        <Route path="/new" element={<Form />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
